import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';
import Data from '../../api/Categories.json';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeView}>
      {Data.map((category, key) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryProducts', {categoryId: category.id})
          }
          key={key}>
          <View style={styles.cartStyle}>
            <Image
              style={styles.categoryImage}
              source={{uri: category.image}}
            />
            <Text style={styles.text}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
