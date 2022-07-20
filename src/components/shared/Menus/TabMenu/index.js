import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function TabMenu(props) {
  const [activeMenu, setActiveMenu] = useState('home');
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Home');
          setActiveMenu('home');
        }}
        style={styles.iconStyle}>
        {activeMenu === 'home' ? (
          <Ionicons name="home" size={30} color="#4D6EBB" />
        ) : (
          <Ionicons name="home-outline" size={30} color="#4D6EBB" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('PopularProducts');
          setActiveMenu('opencart');
        }}
        style={styles.iconStyle}>
        {activeMenu === 'opencart' ? (
          <FontAwesome name="heart" size={30} color="#4D6EBB" />
        ) : (
          <Feather name="heart" size={30} color="#4D6EBB" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Cart');
          setActiveMenu('openbasket');
        }}
        style={styles.iconStyle}>
        {activeMenu === 'openbasket' ? (
          <FontAwesome5 name="shopping-cart" size={30} color="#4D6EBB" />
        ) : (
          <Feather name="shopping-cart" size={30} color="#4D6EBB" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Account');
          setActiveMenu('openprofil');
        }}
        style={styles.iconStyle}>
        {activeMenu === 'openprofil' ? (
          <FontAwesome name="user" size={30} color="#4D6EBB" />
        ) : (
          <Feather name="user" size={30} color="#4D6EBB" />
        )}
      </TouchableOpacity>
    </View>
  );
}
