import {
  View,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { } from './Config'
import Tile from './Tile';
import SortableList from './SortableList';

const tiles = [
  {
    id: 'google',
    uri: 'https://google.com'
  },
  {
    id: 'expo',
    uri: 'https://google.com'
  },
  {
    id: 'facebook',
    uri: 'https://google.com'
  },
  {
    id: 'reanimated',
    uri: 'https://google.com'
  },
  {
    id: 'github',
    uri: 'https://google.com'
  },
  {
    id: 'rnnavigation',
    uri: 'https://google.com'
  },
  {
    id: 'youtube',
    uri: 'https://google.com'
  },
  {
    id: 'instagram',
    uri: 'https://google.com'
  }
];

const DragEffect = () => {
  return (
    <SafeAreaView>
      <SortableList>
        {
          [...tiles, ...tiles].map((tile, index) => (
            <Tile
              key={tile.id + '-' + index}
              id={tile.id + '-' + index}
              uri={tile.uri}
              onLongPress={() => true}
            />
          ))
        }
      </SortableList>
    </SafeAreaView>
  );
}

export default DragEffect;