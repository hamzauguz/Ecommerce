import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scrollview } from "../../api/config.json";
import styles from "./styles";

const ScrollViewComponent = ({ data, title }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.cat}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text>{scrollview.see_all}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollStyle} horizontal={true}>
        {data}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;
