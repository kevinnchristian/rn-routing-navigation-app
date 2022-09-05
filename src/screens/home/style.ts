import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: 0.5,
    paddingVertical: Dimensions.get('window').height / 2 - 230,
  },
});