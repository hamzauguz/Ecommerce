import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardView: {
    width: width / 2.29411765,
    height: Platform.OS === "ios" ? height / 3.376 : height / 3,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: width / 39,
    marginLeft: width / 26,
    marginRight: width / 78,
    marginTop: width / 39,
  },
  safeArea: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bigImage: {
    width: width / 2.29411765,
    height: height / 6.49230769,
    borderTopRightRadius: width / 39,
  },
  icon: {
    bottom: width / 3.25,
    left: width / 39,
    backgroundColor: "white",
    height: height / 28.1333333,
    width: width / 13,
    borderRadius: width / 39,
    alignItems: "center",
    justifyContent: "center",
  },
  opacity: { opacity: 0.6 },
  descView: { bottom: width / 26, left: width / 78 },
  descTitle: { fontSize: 15, fontWeight: "500", bottom: width / 78 },
  priceText: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    fontSize: 19,
    right: width / 39,
    color: "#5C81DA",
    fontWeight: "600",
  },
  star: {
    flexDirection: "row",
    left: width / 78,
  },
  checkView: {
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    margin: 5,
  },
  textStyle: { fontWeight: "500", fontSize: 16, opacity: 0.7 },
});

export default styles;
