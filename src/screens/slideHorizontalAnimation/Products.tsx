import {
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { products } from './Model';

interface IProductProps {
  x: Animated.SharedValue<number>;
}

const { width } = Dimensions.get('window');
const SIZE = 220;

const Products = ({ x }: IProductProps) => {
  return (
    <View style={styles.container} pointerEvents='none'>
      {products?.map((product, index) => {
        const style = useAnimatedStyle(() => {
          const translateX = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [width / 2, 0, - width / 2]
          );
          const scale = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.61, 1, 0.61]
          );
          return {
            transform: [{ translateX }, { scale }]
          }
        });

        return (
          <Animated.View
            key={index}
            style={[styles.container, style]}
          >
            <Image
              source={product.picture}
              style={{
                height: SIZE * product.ratio,
                width: SIZE,
                marginTop: 25,
              }}
            />
          </Animated.View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Products;