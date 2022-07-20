import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabMenu from '../../components/shared/Menus/TabMenu';
import DrawerMenu from '../../components/shared/Menus/DrawerMenu';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';
import PopularProducts from '../../pages/PopularProducts';
import ProductDetail from '../../pages/ProductDetail';
import Account from '../../pages/Account';
import Categories from '../../pages/Categories';
import CategoryProducts from '../../pages/CategoryProducts';

import {StyleSheet, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

function RoutesTabMenu({navigation}) {
  return (
    <Tab.Navigator tabBar={props => <TabMenu {...props} />}>
      <Tab.Screen
        options={{
          title: 'Home',
          headerRight: () => (
            <Ionicons name="notifications-outline" style={styles.iconStyle} />
          ),
          headerLeft: () => (
            <MenuIcon
              onPress={() => navigation.openDrawer()}
              name="menu"
              style={styles.iconStyle}
            />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          title: 'Cart',
          headerRight: () => (
            <TouchableOpacity>
              <MenuIcon name="dots-three-vertical" style={styles.iconStyle} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <MenuIcon
              onPress={() => navigation.openDrawer()}
              name="menu"
              style={styles.iconStyle}
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          title: 'Popular Products',
          headerRight: () => (
            <TouchableOpacity>
              <MenuIcon name="dots-three-vertical" style={styles.iconStyle} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <MenuIcon
              onPress={() => navigation.openDrawer()}
              name="menu"
              style={styles.iconStyle}
            />
          ),
        }}
        name="PopularProducts"
        component={PopularProducts}
      />
      <Tab.Screen
        options={{
          title: 'Account',
          headerRight: () => (
            <Ionicons name="notifications-outline" style={styles.iconStyle} />
          ),
          headerLeft: () => (
            <MenuIcon
              onPress={() => navigation.openDrawer()}
              name="menu"
              style={styles.iconStyle}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          title: 'Categories',
          headerRight: () => (
            <TouchableOpacity>
              <MenuIcon name="dots-three-vertical" style={styles.iconStyle} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" style={styles.iconStyle} />
            </TouchableOpacity>
          ),
        }}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={{
          title: 'Product Detail',
          headerRight: () => (
            <Ionicons name="heart" style={{color: 'red', fontSize: 30}} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PopularProducts')}>
              <Feather name="arrow-left" style={styles.iconStyle} />
            </TouchableOpacity>
          ),
        }}
        name="ProductDetail"
        component={ProductDetail}
      />

      <Tab.Screen
        options={{
          title: 'Category Products',
          headerRight: () => (
            <Ionicons name="notifications-outline" style={styles.iconStyle} />
          ),
          headerLeft: () => (
            <Feather
              onPress={() => navigation.navigate('Categories')}
              name="arrow-left"
              style={styles.iconStyle}
            />
          ),
        }}
        name="CategoryProducts"
        component={CategoryProducts}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function RoutesDrawerMenu() {
  return (
    <Drawer.Navigator
      drawerStyle={{width: 300}}
      overlayColor="#1F2430"
      drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        options={() => ({
          headerShown: false,
        })}
        name={'Bottom Navigator'}
        component={RoutesTabMenu}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {color: 'gray', fontSize: 30},
});
