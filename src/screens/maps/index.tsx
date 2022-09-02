import { useState } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import { ILocalization } from '../../types';

import styles from './style';

export default function MapsScreen() {
  const [find, setFind] = useState<ILocalization>({
    latitude: 37.38194493240522,
    longitude: -121.96832880929028,
    latitudeDelta: 0.050,
    longitudeDelta: 0.050,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      >
        <Marker
          coordinate={{
            latitude: find.latitude,
            longitude: find.longitude,
          }}
          image={require('../../assets/images/pin.png')}
        >
          <Callout>
            <View style={styles.contentCallout}>
              <Text style={styles.textCallout}>Silicon Valley</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}