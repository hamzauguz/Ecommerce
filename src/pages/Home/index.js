import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ScrollViewComponent from "../../components/ScrollViewComponent";
import { useNavigation } from "@react-navigation/native";
import { scrollview } from "../../api/config.json";

import SwiperView from "../../components/SwiperView";
import FlashSale from "../../components/FlashSale";
import BestSelling from "../../components/BestSelling";
import sliderData from "../../api/Slider.json";
import CatData from "../../api/Categories.json";

import styles from "./styles";
import ScrollCart from "../../components/ScrollCart";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.flex}>
      <ScrollView>
        <SwiperView
          sliderInside={sliderData.map((sliderImage, key) => (
            <Image
              resizeMode={"contain"}
              key={key}
              style={styles.image}
              source={{
                uri: sliderImage.image,
              }}
            />
          ))}
        />
        <ScrollViewComponent
          title={scrollview.categories}
          data={CatData.map((category, key) => (
            <ScrollCart
              onPress={() =>
                navigation.navigate("CategoryProducts", {
                  categoryId: category.id,
                })
              }
              key={key}
              uri={{ uri: category.image }}
              text={category.name}
            />
          ))}
        />
        <FlashSale />
        <BestSelling />
      </ScrollView>
    </View>
  );
}
