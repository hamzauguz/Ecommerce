import React, { useCallback, useMemo, useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import { productdetail } from "../../api/config.json";
import {
  addToCart,
  decrement,
  increment,
} from "../../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

const ProductDetail = (props) => {
  const {
    title,
    id,
    image,
    category,
    price,
    colors,
    sizes,
    description,
    rating,
  } = props.route.params.item;
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("#3D3936");
  const [selectedSize, setSelectedSize] = useState("XL");
  const snapPoints = useMemo(() => ["50%", "51%", "80%"], []);

  const productQuantity = useSelector(
    (state) => state.cart.find((a) => a.id === id)?.quantity || 0
  );

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageh} />
      <BottomSheet
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.alcenter}>
            <View style={styles.fdRow}>
              <View style={styles.mainTitleMenu}>
                <Text numberOfLines={1} style={styles.titleMenu}>
                  {title}
                </Text>
                <Text style={styles.categoryTitle}>{category}</Text>
                <View style={styles.fdRow}>
                  {Array(5)
                    .fill(1, 0, 101)
                    .map((val, index) => (
                      <AntDesign
                        style={styles.mHor}
                        color={"#F0C60A"}
                        name="star"
                      />
                    ))}
                  <Text style={styles.ratingSize}>{rating}</Text>
                </View>
              </View>
              <View style={styles.priceMenu}>
                <Text style={styles.priceTitle}>
                  {productdetail.dolar}
                  {price}
                </Text>
                <View style={styles.countView}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(decrement(id));
                    }}
                    style={styles.descrementText}
                  >
                    <AntDesign name="minus" size={15} />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{productQuantity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(increment(id));
                    }}
                    style={styles.incrementText}
                  >
                    <AntDesign name="plus" size={15} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.colorMenu}>
            <Text style={styles.colorMenuTitle}>{productdetail.color}</Text>
            <View style={styles.colorRow}>
              {colors?.map((color, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => setSelectedColor(color)}
                >
                  <View
                    style={[
                      styles.colorsView,
                      {
                        borderWidth: selectedColor === color ? 3 : 0,
                        backgroundColor: color,
                      },
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.sizeMenu}>
            <View style={styles.topSize}>
              <Text style={styles.colorMenuTitle}>{productdetail.size}</Text>
              <View style={styles.sizeRow}>
                {sizes?.map((size, key) => (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.sizesView,
                      {
                        borderWidth: selectedSize === size ? 3 : 0,
                      },
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text style={styles.sizeColor}>{size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity
              style={styles.addToCartMenu}
              onPress={() => {
                dispatch(
                  addToCart({
                    ...props.route.params.item,
                    color: selectedColor,
                    size: selectedSize,
                  })
                );
              }}
            >
              <Text style={styles.addToCartTitle}>
                {productdetail.addtocart}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsMenu}>
            <Text style={styles.detailsTitle}>{productdetail.details}</Text>
            <View style={styles.descView} />
            <Text style={styles.descTitle}>{description}</Text>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ProductDetail;
