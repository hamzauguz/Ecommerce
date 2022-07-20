import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import * as S from './styles';

import NavButton from './NavButton';

export default function DrawerMenu(props) {
  return (
    <S.Column>
      <DrawerContentScrollView>
        <NavButton
          text="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <S.Separator />
        <NavButton
          text="PopularProducts"
          onPress={() => props.navigation.navigate('PopularProducts')}
        />
        <S.Separator />
        <NavButton
          text="My Basket"
          onPress={() => props.navigation.navigate('Cart')}
        />
        <S.Separator />
        <NavButton
          text="My Account"
          onPress={() => props.navigation.navigate('Account')}
        />
      </DrawerContentScrollView>
    </S.Column>
  );
}
