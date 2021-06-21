import React from 'react';
import logo from '../../images/pokebola.png';
import { HeaderContainer } from './style';

interface IHeader {
  msg: string;
}

export default function Heade({ msg }: IHeader): JSX.Element {
  return (
    <HeaderContainer>
      <img src={logo} alt="pokebola logo" />
      <h1>{msg}</h1>
    </HeaderContainer>
  );
}
