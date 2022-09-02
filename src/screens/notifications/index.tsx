import {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
} from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import styles from './style';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    handleShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: false,
  })
});

export default function NotificationsScreen() {
  const [expoToken, setExpoToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<any>(false);

  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification);
      },
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => console.log(response)
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Token: {expoToken && expoToken}
      </Text>

      <View style={styles.notificationDataContent}>
        <Text style={styles.text}>
          Title:
        </Text>

        <Text style={styles.text}>
          Body:
        </Text>

        <Text style={styles.text}>
          Data:
        </Text>
      </View>
      <Button
        title='Notifications'
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

const schedulePushNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Push notification',
      body: "I'm notification",
      data: { result: 'Anything' },
    },
    trigger: { seconds: 2 }
  });
}

const registerForPushNotificationsAsync = async () => {
  let token;

  // Verificando se é um dispositivo
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    console.log(existingStatus);

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (existingStatus === 'granted') {
      //alert('Notification Failed');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('token da notificação: ', token);
    console.log('status do device: ', finalStatus);

  } else {
    alert('Use a physical device to view');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#84C1D9',
    });
  }

  return token;
}