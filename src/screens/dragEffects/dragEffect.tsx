import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Tile from './Tile';
import SortableList from './SortableList';

const tiles = [
  {
    id: 'google',
    uri: 'https://google.com'
  },
  {
    id: 'expo',
    uri: 'https://expo.io'
  },
  {
    id: 'reanimated',
    uri: 'https://docs.swmansion.com/react-native-reanimated/'
  },
  {
    id: 'youtube',
    uri: 'https://youtube.com'
  },
  {
    id: 'github',
    uri: 'https://github.com'
  },
  {
    id: 'instagram',
    uri: 'https://instagram.com'
  },
  {
    id: 'rnnavigation',
    uri: 'https://reactnavigation.org/'
  },
  {
    id: 'facebook',
    uri: 'https://facebook.com'
  },
];

const DragEffect = () => {
  return (
    <SafeAreaView>
      <SortableList>
        {
          [...tiles].map((tile, index) => (
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