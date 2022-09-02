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
        onPress={() => handleScreen('CameraScreen')}
      />
      <Button
        title='Maps'
        onPress={() => handleScreen('Maps')}
      />
    </View>
  );
}