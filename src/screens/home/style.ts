import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    paddingHorizontal: 0.5,
    paddingVertical: Dimensions.get('window').height / 2 - 230,
  },
});