import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import * as S from './styles';

export default function NavButton(props) {
  return (
    <S.Column onPress={props.onPress}>
      <Entypo name="home" size={30} color="red" />
    </S.Column>
  );
}
