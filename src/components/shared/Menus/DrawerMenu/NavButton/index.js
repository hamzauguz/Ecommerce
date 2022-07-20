import React from 'react';

import * as S from './styles';

export default function NavButton(props) {
  return (
    <S.Row onPress={props.onPress}>
      <S.Text>{props.text}</S.Text>
    </S.Row>
  );
}
