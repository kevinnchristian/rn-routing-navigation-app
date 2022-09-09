import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Button from './components/Button';
import CardHeader from './components/CardHeaders';

import { IProduct } from './Model';

interface ICardProps {
  product: IProduct;
}

const { width } = Dimensions.get('window');
export const CARD_HEIGHT = width * 1.25;

const Card = ({ product: { title, subtitle, color1 } }: ICardProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: color1,
          borderRadius: 16,
          padding: 16,
          margin: 32,
        }}
      >
        <View>
          <Text
            style={styles.title}
          >
            {title}
          </Text>
          <Text
            style={styles.subtitle}
          >
            {subtitle}
          </Text>
        </View>
        <Button label='Show more' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: CARD_HEIGHT,
    width,
  },
  title: {
    color: '#432406',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#432406',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Card;