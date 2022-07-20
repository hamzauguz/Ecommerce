import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FlashData from "../../api/Products.json";
import { useNavigation } from "@react-navigation/native";
import { bestselling } from "../../api/config.json";
import styles from "./styles";

const Item = ({ image, category, price, title }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.bigImage} source={{ uri: image }} />

      <View style={styles.descView}>
        <Text numberOfLines={1} style={styles.descTitle}>
          {title}
        </Text>
        <Text style={styles.opacity}>{category}</Text>
        <Text style={styles.priceText}>
          {bestselling.dolar}
          {price}
        </Text>
      </View>
    </View>
  );
};

const BestSelling = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <View style={styles.title}>
        <Text style={styles.cat}>{bestselling.best_selling}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PopularProducts");
          }}
        >
          <Text>{bestselling.see_all}</Text>
        </TouchableOpacity>
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

export default BestSelling;
