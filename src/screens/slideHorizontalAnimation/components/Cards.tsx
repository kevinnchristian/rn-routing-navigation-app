import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

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
      <View style={styles.container}>
        <Image
          source={picture}
          style={styles.image}
        />
      </View>
      <View
        style={styles.caption}
      >
        <Text
          style={styles.text}
        >
          {caption}
        </Text>
      </View>
    </>
  )
}

const Cards = () => {
  return (
    <View>
      {cards?.map(({ picture, caption }, index) => (
        <Card
          key={index}
          picture={picture}
          caption={caption}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 12,
    height: width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: undefined,
    width: undefined,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  caption: {
    backgroundColor: '#F4F4F6',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 24,
  },
  text: {
    color: '#432406',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cards;