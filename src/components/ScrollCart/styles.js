import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  categoryImage: {
    height: Platform.OS === "ios" ? height / 11 : height / 11,
    width: Platform.OS === "ios" ? width / 5.5 : width / 5.1,
    borderRadius: width / 9.75,
  },
  cartStyle: {
    flexDirection: "column",
    alignItems: "center",
    height: height / 8.44,
    marginRight: width / 78,
    marginLeft: width / 78,
  },
  text: {
    fontSize: Platform.OS === "ios" ? 16 : 14,
    fontWeight: "500",
    color: "gray",
    opacity: 0.8,
  },
});
export default styles;
