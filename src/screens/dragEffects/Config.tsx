import {
  Dimensions
} from 'react-native';
import { Easing } from 'react-native-reanimated';

export interface IPositions {
  [id: string]: number,
}

const { width } = Dimensions.get('window');
export const MARGIN = 8;
export const SIZE = width / 2 - MARGIN;
export const COLUMN = 2;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
}

export const getPosition = (order: number) => {
  'worklet'

  return {
    x: (order % COLUMN) * SIZE,
    y: Math.floor(order / COLUMN) * SIZE,
  }
}

export const getOrder = (position: { x: number, y: number }) => {
  'worklet'
  const column = Math.round(position.x / SIZE);
  const row = Math.round(position.y / SIZE);

  return column + row * COLUMN;
}