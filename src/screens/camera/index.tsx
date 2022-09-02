import { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import styles from './style';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission?.granted) {
    return (
      <View>
        <Modal
          animationType='slide'
        >
          <Text>
            É necessários dar permissões para acessar recursos
            do seu dipositivo.
          </Text>
          <Button
            title='Permitir'
            onPress={() => requestPermission()}
          />
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera</Text>

      <Camera
        type={type}
        style={styles.camera}
      >
        <Button
          title={'Trocar Camera'}
          onPress={() => setType(
            type === CameraType.back ? CameraType.front : CameraType.back
          )}
        />
      </Camera>
    </View>
  );
}