import {
  View,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export default function HomeScreen() {
  const { navigate } = useNavigation();

  const handleScreen = (screen: any) => {
    navigate(screen)
  };

  return (
    <View style={styles.container}>
      <Button
        title='Home'

        onPress={() => handleScreen('Home')}
      />
      <Button
        title='Camera'
        onPress={() => handleScreen('Camera')}
      />
      <Button
        title='Maps'
        onPress={() => handleScreen('Maps')}
      />
      <Button
        title='Notification'
        onPress={() => handleScreen('Notifications')}
      />
      <Button
        title='Slide Animation'
        onPress={() => handleScreen('Slide Animation')}
      />
      <Button
        title='Slide Horizontal Animation'
        onPress={() => handleScreen('Slide Horizontal Animation')}
      />
    </View>
  );
}