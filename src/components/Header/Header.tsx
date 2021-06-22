import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/pokebola.png';
import { HeaderContainer } from './style';

interface IHeader {
  msg: string;
}

export default function Heade({ msg }: IHeader): JSX.Element {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="pokebola logo" />
        <h1>{msg}</h1>
      </Link>
    </HeaderContainer>
  );
}
