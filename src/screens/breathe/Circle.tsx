import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  clamp,
  mix,
  polar2Canvas,
} from 'react-native-redash';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
export const SIZE = width / 2;

const transform = (theta: number, value: number) => {
  'worklet';
  const { x, y } = polar2Canvas(
    { theta, radius: SIZE / 2 },
    { x: 0, y: 0 }
  );
  const translateX = mix(value, 0, x);
  const translateY = mix(value, 0, y);

  return [{ translateX }, { translateY }, { scale: mix(value, 0.3, 1) }];
}

interface ICircleProps {
  progress: Animated.SharedValue<number>;
  goesDown: Animated.SharedValue<boolean>;
  index: number;
}

const Circle = ({ progress, goesDown, index }: ICircleProps) => {
  const theta = (index * (2 * Math.PI)) / 8;
  const style1 = useAnimatedStyle(() => {
    return {
      transform: transform(theta, progress.value)
    };
  });
  const style2 = useAnimatedStyle(() => {
    const value = goesDown.value ? clamp(progress.value + 0.1, 0, 1) : progress.value;

    return {
      opacity: interpolate(value, [0.6, 1], [0, 1], Extrapolate.CLAMP),
      transform: transform(theta, value)
    };
  });

  return (
    <Animated.View
      style={[styles.container, style1]}
    >
      <LinearGradient
        colors={['#62BFA1', '#529CA0']}
        style={styles.circle}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    opacity: 0.5,
  },
});

export default Circle;