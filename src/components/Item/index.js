import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./styles";

const Item = ({ image, title, category, price, rating }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.bigImage} source={{ uri: image }} />
      <View style={styles.icon}>
        <Icon size={25} color="red" name="heart" />
      </View>

      <View style={styles.descView}>
        <Text numberOfLines={1} style={styles.descTitle}>
          {title}
        </Text>
        <Text style={styles.opacity}>{category}</Text>
      </View>
      <View style={styles.star}>
        <Icon name="star" size={17} color={"#E3D946"} />
        <Text style={styles.opacity}>{rating}</Text>
      </View>
      <Text style={styles.priceText}>${price}</Text>
    </View>
  );
};

export default Item;
