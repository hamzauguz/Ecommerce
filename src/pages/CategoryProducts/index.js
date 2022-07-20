import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Products from "../../api/Products.json";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Item from "../../components/Item";

const CategoryProducts = (props) => {
  const navigation = useNavigation();
  const categoryId = props.route.params.categoryId;

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProductDetail", {
              item,
            });
          }}
        >
          <Item
            image={item.image}
            category={item.category}
            price={item.price}
            title={item.title}
            rating={item.rating}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        data={Products.filter((p) => p.category_id === categoryId)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryProducts;
