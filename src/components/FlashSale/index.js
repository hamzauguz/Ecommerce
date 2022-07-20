import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FlashData from "../../api/Products.json";
import { useNavigation } from "@react-navigation/native";
import { flashsale } from "../../api/config.json";
import styles from "./styles";

const Item = ({ image, category, price }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.bigImage} source={{ uri: image }} />

      <View style={styles.descView}>
        <Text style={styles.descTitle}>{category}</Text>
        <Text style={styles.opacity}>%0 discount</Text>
        <Text style={styles.priceText}>${price}</Text>
      </View>
    </View>
  );
};

const FlashSale = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <View style={styles.title}>
        <Text style={styles.cat}>{flashsale.flash_sale}</Text>
        <Text>{flashsale.timer}</Text>
      </View>

      <ScrollView horizontal={true}>
        {FlashData.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetail", {
                  item,
                });
              }}
              key={key}
              style={styles.cardView}
            >
              <Item
                image={item.image}
                category={item.category}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FlashSale;
