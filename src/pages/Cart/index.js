import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "@gorhom/bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import { cartcontainer } from "../../api/config.json";

import {
  increment,
  decrement,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../../redux/selectors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const bottomSheetRef = useRef(null);
  const [indexcontrol, setIndexControl] = useState(0);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    index === 2 ? setIndexControl(1) : setIndexControl(0);
  }, []);
  const snapPoints = useMemo(() => ["12", "12%", "50%"], []);

  const renderStoreItems = ({ item }) => {
    return (
      <ScrollView>
        <View style={styles.mainView}>
          <Image style={styles.bigImage} source={{ uri: item.image }} />
          <View style={styles.descView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.fdrow}>
              <Text>{cartcontainer.color}</Text>
              <View
                style={[
                  styles.colorView,
                  {
                    backgroundColor: `${item.color}`,
                  },
                ]}
              />
            </View>
            <View style={styles.fdrow}>
              <Text>{cartcontainer.size}</Text>
              <View style={styles.sizeView}>
                <Text>{item.size}</Text>
              </View>
            </View>

            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.justBetween}>
            <TouchableOpacity
              onPress={() => {
                dispatch(removeItem(item.id));
              }}
            >
              <MaterialCommunityIcons
                style={styles.iconMaterial}
                name="delete"
                size={25}
                color={"gray"}
              />
            </TouchableOpacity>
            <View style={styles.countView}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(decrement(item.id));
                }}
                style={styles.descrementText}
              >
                <AntDesign name="minus" size={15} />
              </TouchableOpacity>
              <Text style={styles.sizet}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
                style={styles.incrementText}
              >
                <AntDesign name="plus" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.firstView}>
      {cart.length === 0 && (
        <Image
          style={styles.emtypcart}
          resizeMode="contain"
          source={require("../../images/empty.png")}
        />
      )}
      <FlatList
        data={cart}
        style={styles.heightper}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
      />
      <BottomSheet
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        ref={bottomSheetRef}
      >
        <View style={styles.totalyView}>
          {indexcontrol === 0 ? (
            <TouchableOpacity style={styles.checkoutCart}>
              <Text style={styles.checkOutText}>{cartcontainer.checkout}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.promoCodeView}>
              <Text style={styles.promoTitle}>{cartcontainer.promo_code}</Text>
              <TouchableOpacity style={styles.applyText}>
                <Text style={styles.applyTitle}>{cartcontainer.apply}</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.totalyPriceView}>
            <View style={styles.subTotalView}>
              <Text style={styles.subTotalTitle}>{cartcontainer.subtotal}</Text>
              <Text style={styles.subTotalPrice}>
                {cartcontainer.dolar}
                {totalPrice}
              </Text>
            </View>
            <View style={styles.borderLine} />
            <View style={styles.subTotalView}>
              <Text style={styles.deliveryTitle}>{cartcontainer.delivery}</Text>
              <Text style={styles.deliveryPrice}>
                {cartcontainer.dolarzero}
              </Text>
            </View>
            <View style={styles.borderLine} />
            <View style={styles.subTotalView}>
              <Text style={styles.deliveryTitle}>{cartcontainer.total}</Text>
              <Text style={styles.totalPrice}>
                {cartcontainer.dolar}
                {totalPrice}
              </Text>
            </View>
          </View>
          {indexcontrol === 1 && (
            <TouchableOpacity style={styles.checkOutTouch}>
              <Text style={styles.checkOutText}>{cartcontainer.checkout}</Text>
            </TouchableOpacity>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

const Cart = () => {
  return (
    <View>
      <CartContainer />
    </View>
  );
};

export default Cart;
