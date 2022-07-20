import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ScrollCart = ({ onPress, uri, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cartStyle}>
        <Image
          style={styles.categoryImage}
          source={uri}
          resizeMode={"contain"}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollCart;
