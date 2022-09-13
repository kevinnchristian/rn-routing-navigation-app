import {
  View,
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
    overflow: 'hidden',
  },
  cardWebView: {
    flex: 1,
    margin: MARGIN * 2,
  }
});

export default Tile;