import { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import Circle from './Circle';

const BreatheEffect = () => {
  const progress = useSharedValue(0);
  const goesDown = useSharedValue(false);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(
        1,
        { duration: 2500, easing: Easing.out(Easing.ease) },
        () => (goesDown.value = !goesDown.value)
      ),
      -1,
      true
    );
  }, [goesDown, progress]);

  const style = useAnimatedStyle(() => {
    return {
      flex: 1,
      transform: [{ rotate: `${mix(progress.value, -Math.PI, 0)}rad` }]
    }
  });

  return (
    <View
      style={styles.container}
    >
      <Animated.View
        style={style}
      >
        {new Array(8).fill(0).map((_, index) => (
          <Circle
            key={index}
            progress={progress}
            goesDown={goesDown}
            index={index}
          />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default BreatheEffect;