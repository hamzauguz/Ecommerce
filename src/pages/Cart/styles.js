import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    marginBottom: width / 39,
    marginVertical: width / 78,
    marginHorizontal: width / 39,
    borderRadius: width / 26,
    backgroundColor: "white",
    width: "93%",
    alignSelf: "center",
    height: "auto",
    overflow: "hidden",
  },
  bigImage: { width: width / 4.58823529, height: height / 6.83333333 },
  descView: { width: "60%", left: width / 78, justifyContent: "space-around" },
  title: { fontSize: 15, fontWeight: "500" },
  category: { opacity: 0.8, fontSize: 14 },
  price: { fontSize: 20, fontWeight: "500", color: "#45A0E0" },
  justBetween: { justifyContent: "space-between" },
  iconMaterial: { opacity: 0.7, left: width / 26, top: width / 78 },
  countView: {
    flexDirection: "row",
    bottom: width / 39,
    right: width / 9.75,
  },
  descrementText: {
    width: width / 13,
    height: height / 32.4615385,
    backgroundColor: "#D2D6D9",
    alignItems: "center",
    borderRadius: width / 30,
    justifyContent: "center",
    right: width / 26,
  },
  incrementText: {
    width: width / 13,
    height: height / 32.4615385,
    backgroundColor: "#D2D6D9",
    alignItems: "center",
    borderRadius: width / 30,
    justifyContent: "center",
    left: width / 26,
  },
  countInside: { fontSize: 15, fontWeight: "500" },
  totalyView: {
    backgroundColor: "#DEDDDB",
    height: Platform.OS === "ios" ? height / 2.0105263 : height / 1.5105263,
    overflow: "hidden",
    width: "100%",
    padding: width / 78,
    bottom: Platform.OS === "android" && 20,
  },
  totalyViewInside: {
    backgroundColor: "gray",
    width: width / 7.09090909,
    height: height / 140.666667,
    alignSelf: "center",
    borderRadius: width / 39,
    opacity: 0.4,
    marginVertical: width / 78,
  },
  promoCodeView: {
    width: "100%",
    height: height / 14.0666667,
    backgroundColor: "#DCC4AB",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: width / 39,
    borderWidth: 2,
    borderRadius: width / 39,
    alignItems: "center",
    borderColor: "#FF9B00",
  },
  promoTitle: {
    right: width / 39,
    opacity: 0.5,
    fontSize: 16,
    fontWeight: "500",
  },
  applyText: {
    backgroundColor: "#FA8100",
    width: width / 3,
    height: height / 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width / 19.5,
    left: width / 19.5,
  },
  applyTitle:
    Platform.OS === "ios"
      ? { color: "#fff", fontSize: 18, fontWeight: "500" }
      : { color: "#fff", fontSize: 14, fontWeight: "500" },
  totalyPriceView: {
    backgroundColor: "#fff",
    height: height / 5.82857143,
    borderRadius: width / 39,
  },
  subTotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: height / 24.1142857,
    alignItems: "center",
    margin: width / 78,
  },
  subTotalTitle: { fontSize: 14, opacity: 0.6 },
  subTotalPrice:
    Platform.OS === "ios"
      ? { fontSize: 20, opacity: 0.8 }
      : { fontSize: 14, opacity: 0.8 },
  borderLine: {
    height: 1,
    backgroundColor: "gray",
    width: "97%",
    alignSelf: "center",
  },
  deliveryTitle: { fontSize: 14, opacity: 0.6 },
  deliveryPrice:
    Platform.OS === "ios"
      ? { fontSize: 20, opacity: 0.8 }
      : { fontSize: 14, opacity: 0.8 },
  totalPrice:
    Platform.OS === "ios"
      ? {
          fontSize: 24,
          right: width / 26,
          color: "#1E88D1",
          fontWeight: "600",
        }
      : {
          fontSize: 17,
          right: width / 26,
          color: "#1E88D1",
          fontWeight: "600",
        },
  checkOutTouch: {
    backgroundColor: "#4C97CB",
    width: "100%",
    height: height / 16.88,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: width / 20,
    borderRadius: width / 19.5,
  },
  checkOutText: { fontSize: 20, color: "#fff", fontWeight: "500" },
  firstView: { flexDirection: "column", alignItems: "center", height: "100%" },
  heightper: { height: "35%" },
  sizeView: {
    height: Platform.OS === "ios" ? height / 42.2 : height / 32,
    width: width / 19.5,
    borderColor: "#07F0F4",
  },
  fdrow: { flexDirection: "row", height: "auto" },
  sizet:
    Platform.OS === "android" ? { fontSize: 20, bottom: 10 } : { fontSize: 20 },
  colorView: {
    height: height / 42.2,
    width: width / 19.5,
    borderRadius: 20,
    marginHorizontal: width / 78,
    borderColor: "#07F0F4",
  },
  emtypcart: {
    width: "100%",
    backgroundColor: "white",
    height: "110%",
    bottom: height / 5.6266,
  },
  checkoutCart: {
    backgroundColor: "#4C97CB",
    width: "100%",
    height: height / 16.88,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width / 19.5,
  },
});

export default styles;
