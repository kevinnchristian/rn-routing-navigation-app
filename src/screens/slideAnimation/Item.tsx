import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
} from 'react-native';

import {
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  item: Item;
  y: Animated.SharedValue<number>;
  index: number;
}

const Item = ({ y, index, item: { title, subtitle, picture } }: ItemProps) => {
  const container = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [MIN_HEIGHT, MAX_HEIGHT],
      Extrapolate.CLAMP,
    )
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    )
  }));

  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert(title)}>
      <Animated.View
        style={[styles.container, container]}
      >
        <Image
          source={picture}
          style={styles.picture}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>
            {subtitle.toUpperCase()}
          </Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              <Text
                style={styles.title}
              >
                {title.toUpperCase()}
              </Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Item;

const { height, width } = Dimensions.get('window');
export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height * 0.935;

const styles = StyleSheet.create({
  container: {
    height: MAX_HEIGHT,
    width,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: '#F4F4F6',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: MAX_HEIGHT * 0.61,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 32,
    transform: [{
      translateY: 32
    }],
  },
  subtitle: {
    color: '#F4F4F6',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  }
});