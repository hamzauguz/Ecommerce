import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  iconStyle: {
    width: "25%",
    alignItems: "center",
    bottom: 3,
  },
  viewStyle: {
    flexDirection: "row",
    height: "7%",
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",

    justifyContent: "space-around",
  },
});

export default styles;
