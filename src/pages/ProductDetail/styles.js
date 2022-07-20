import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  countView: {
    flexDirection: "row",
    marginVertical: width / 13,
    right: width / 26,
    width: width / 5.2,
    height: height / 21.1,
  },
  descrementText: {
    width: width / 13,
    height: height / 32.4615385,
    backgroundColor: "#D2D6D9",
    alignItems: "center",
    borderRadius: width / 30,
    justifyContent: "center",
    right: width / 40,
  },
  incrementText: {
    width: width / 13,
    height: Platform.OS === "ios" ? height / 32.4615385 : height / 27.4615385,
    backgroundColor: "#D2D6D9",
    alignItems: "center",
    borderRadius: width / 30,
    justifyContent: "center",
    left: width / 60,
  },
  countInside: { fontSize: 15, fontWeight: "500" },
  totalyView: {
    backgroundColor: "#DEDDDB",
    height: height / 2.22105263,
    borderTopStartRadius: width / 13,
    overflow: "hidden",
    width: "100%",
    borderTopEndRadius: width / 13,
    padding: width / 39,
  },
  fdRow: { flexDirection: "row", top: width / 39 },
  mainTitleMenu: {
    width: "45%",
    height: height / 11.2,
    justifyContent: "space-around",
  },
  titleMenu: { fontSize: 18, fontWeight: "500", opacity: 0.7 },
  categoryTitle: { fontSize: 15, opacity: 0.7 },
  priceTitle: {
    fontSize: 24,
    color: "#2693DE",
    fontWeight: "600",
    opacity: 0.7,
  },
  priceMenu: { alignItems: "flex-end", width: "45%" },
  colorMenu: {
    height: "15%",
    justifyContent: "space-between",
    left: width / 39,
    bottom: Platform.OS === "android" ? 40 : 0,
  },
  colorMenuTitle: {
    fontSize: 20,
    fontWeight: "500",
    opacity: 0.7,
    left: width / 78,
  },
  addToCartMenu: {
    backgroundColor: "#2693DE",
    width: "35%",
    height: height / 12.71428,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    right: width / 26,
    bottom: height / 12.7142,
  },
  sizeMenu: {
    height: "20%",
    justifyContent: "space-between",
    left: width / 39,
    bottom: Platform.OS === "android" ? height / 22.26666 : -height / 42.2,
  },
  addToCartTitle:
    Platform.OS === "ios"
      ? { fontWeight: "600", color: "#fff", fontSize: 20 }
      : { fontWeight: "600", color: "#fff", fontSize: 16 },
  detailsMenu:
    Platform.OS === "ios"
      ? {
          width: "95%",
          alignSelf: "center",
          height: height / 8.44,
          top: height / 12.0571,
        }
      : {
          width: "95%",
          alignSelf: "center",
          height: height / 8.44,
        },
  detailsTitle: {
    color: "#2693DE",
    width: Platform.OS === "ios" ? width / 5.571428 : width / 4.571428,
    fontSize: 16,
    fontWeight: "600",
  },
  descView: {
    borderBottomWidth: 2,
    borderBottomColor: "#2693DE",
    width: width / 5.571428,
  },
  descTitle: { fontSize: 14, top: height / 84.4 },
  sizesView: {
    height: height / 21.1,
    width: width / 9.75,
    backgroundColor: "#CDDCE7",
    borderRadius: width / 19.5,
    marginHorizontal: width / 78,
    borderColor: "#07F0F4",
    alignItems: "center",
    justifyContent: "center",
  },
  colorsView: {
    height: height / 21.1,
    width: width / 9.75,
    borderRadius: width / 19.5,
    marginHorizontal: width / 78,
    borderColor: "#07F0F4",
  },
  imageh: { height: "60%" },
  alcenter: { alignItems: "center" },
  mHor: { marginHorizontal: 3 },
  ratingSize: { fontSize: 15 },
  quantity: {
    fontSize: 20,
    width: width / 16.95652,
    alignItems: "center",
    justifyContent: "center",
    left: width / 78,
    bottom: Platform.OS === "android" && 5,
  },
  colorRow: { flexDirection: "row" },
  sizeColor: { color: "black" },
  sizeRow: { flexDirection: "row" },
  topSize: { top: width / 39 },
});

export default styles;
