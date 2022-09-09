import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface IButton {
  label: string;
}

const { width } = Dimensions.get('window');

const Button = ({ label }: IButton) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={styles.container}
      >
        <Text
          style={styles.label}
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 54,
    width: width - 350 / 2,
    backgroundColor: '#432406',
    borderRadius: 6,
    padding: 16,
  },
  label: {
    alignSelf: 'center',
    color: '#F4F4F6',
    fontWeight: 'bold',
  },
});

export default Button;