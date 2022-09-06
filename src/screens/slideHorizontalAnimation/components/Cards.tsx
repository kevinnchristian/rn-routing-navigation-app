import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export const cards = [
  {
    picture: require('../../../assets/images/a.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../../../assets/images/b.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../../../assets/images/c.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../../../assets/images/d.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
];

interface CardProps {
  picture: ReturnType<typeof require>;
  caption: string;
}

const Card = ({ picture, caption }: CardProps) => {
  return (
    <>
      <View>
        <Image source={picture} />
      </View>
      <View>
        <Text>{caption}</Text>
      </View>
    </>
  )
}

const Cards = () => {
  return (
    <View>
      <Text>Cards</Text>
    </View>
  );
}

export default Cards;