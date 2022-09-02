import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import CameraScreen from '../screens/camera';
import MapsScreen from '../screens/maps';
import NotificationsScreen from '../screens/notifications';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        <Screen name='Home' component={HomeScreen} />
        <Screen name='CameraScreen' component={CameraScreen} />
        <Screen name='Maps' component={MapsScreen} />
        <Screen name='Notification' component={NotificationsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}