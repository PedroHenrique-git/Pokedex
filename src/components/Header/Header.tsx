import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/pokebola.png';
import { HeaderContainer } from './style';

interface IHeader {
  msg: string;
  form: JSX.Element | undefined;
  hasForm: boolean;
}
export default function Heade({ msg, form, hasForm }: IHeader): JSX.Element {
  return (
    <HeaderContainer form={hasForm}>
      <Link to="/">
        <img src={logo} alt="pokebola logo" />
        <h1>{msg}</h1>
      </Link>
      {form || false}
    </HeaderContainer>
  );
}
