import { ReactElement } from 'react';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import Item from './Item';

import {
  COLUMN,
  SIZE,
  IPositions,
} from './Config';

interface IListProps {
  children: ReactElement<{ id: string }>[];
}

const SortableList = ({ children }: IListProps) => {
  const scrollView = useAnimatedRef<Animated.ScrollView>();

  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    }
  });
  const positions: Animated.SharedValue<IPositions> = useSharedValue(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index }))
    )
  );

  return (
    <Animated.ScrollView
      ref={scrollView}
      contentContainerStyle={{
        height: Math.ceil(children.length / COLUMN) * SIZE,
      }}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
    >
      {children?.map((child, index) => {
        return (
          <Item
            key={index}
            id={child.props.id}
            positions={positions}
            scrollY={scrollY}
            scrollView={scrollView}
          >
            {child}
          </Item>
        );
      })}
    </Animated.ScrollView>
  );
}

export default SortableList;