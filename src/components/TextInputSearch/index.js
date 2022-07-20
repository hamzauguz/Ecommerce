import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import FilterData from "../../api/Filter.json";
import CheckBox from "@react-native-community/checkbox";
import { Dimensions } from "react-native";

const TextInputSearch = ({ value, onChangeText, onPress, controls }) => {
  const [open, setOpen] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="gray"
          />
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Search"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            onPress;
            open == true ? setOpen(false) : setOpen(true);
          }}
        >
          <Icon
            style={styles.filtericon}
            name="filter-sharp"
            size={35}
            color="orange"
          />
        </TouchableOpacity>
      </View>
      {open && <View style={styles.controlView}>{controls}</View>}
    </View>
  );
};

export default TextInputSearch;
