import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Text,
} from "react-native";
import Products from "../../api/Products.json";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import TextInputSearch from "../../components/TextInputSearch";
import Item from "../../components/Item";
import FilterData from "../../api/Filter.json";
import CheckBox from "@react-native-community/checkbox";

const PopularProducts = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    if (masterDataSource.length === 0) {
      setFilteredDataSource(Products);
    } else {
      setFilteredDataSource(
        Products.filter((filters) =>
          masterDataSource.some((category) =>
            [filters.category_name].flat().includes(category)
          )
        )
      );
    }
    if (search === "") {
      setMasterDataSource(Products);
      setFilteredDataSource(Products);
    }
  }, [masterDataSource]);

  const handleChange = (value, checked, text) => {
    setFilteredDataSource(masterDataSource.filter((id) => id === value));

    if (checked) {
      setMasterDataSource([...masterDataSource, value]);
      setSearch([...masterDataSource, value]);
    } else {
      setMasterDataSource(masterDataSource.filter((id) => id !== value));
      setSearch("");
    }
  };

  const searchFilterFunction = (text) => {
    setMasterDataSource(Products);

    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

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
      <TextInputSearch
        value={search}
        onChangeText={(text) => {
          searchFilterFunction(text);
        }}
        controls={FilterData.map((FilterData, key) => {
          return (
            <View key={key} style={styles.checkView}>
              <CheckBox
                onValueChange={(e) => handleChange(FilterData.category_name, e)}
              />
              <Text style={styles.textStyle}> {FilterData.category_name}</Text>
            </View>
          );
        })}
      />
      <FlatList
        numColumns={2}
        data={filteredDataSource}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PopularProducts;
