import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  MARGIN,
  SIZE,
} from './Config';

interface TileProps {
  id: string;
  uri: string;
  onLongPress: () => void;
}

const Tile = ({ uri }: TileProps) => {
  return (
    <View
      style={styles.container}
      pointerEvents='none'
    >
      <WebView
        style={styles.cardWebView}
        source={{ uri }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZE,
    width: SIZE,
    borderRadius: MARGIN,
    overflow: 'hidden',
  },
  cardWebView: {
    flex: 1,
    width: '100%',
    margin: MARGIN * 2,
  }
});

export default Tile;