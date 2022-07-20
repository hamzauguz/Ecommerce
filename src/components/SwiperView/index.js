import React from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";

const SwiperView = ({ settings, sliderInside }) => {
  return (
    <View style={[styles.container, settings]}>
      <Swiper
        style={styles.swiperStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDot}
        loop
        autoplay
      >
        {sliderInside}
      </Swiper>
    </View>
  );
};

export default SwiperView;
