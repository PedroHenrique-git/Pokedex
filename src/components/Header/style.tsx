import styled from 'styled-components';
import * as colors from '../../styles/colors';

type hasForm = {
  form: boolean;
};

export const HeaderContainer = styled.header<hasForm>`
  background: ${colors.azulMarinho};
  color: ${colors.branco};
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  height: 100px;
  display: flex;
  justify-content: ${(props: hasForm) =>
    props.form ? 'space-around' : 'center'};
  align-items: center;

  @media (max-width: 640px) {
    height: 140px;
  }

  @media (max-width: 850px) {
    flex-direction: ${(props: hasForm) => (props.form ? 'column' : 'row')};
    height: ${(props: hasForm) => (props.form ? '190px' : '100px')};
  }

  form {
    input,
    button {
      border-radius: 20px;
      border: none;
      outline: none;
      padding: 10px;
      font-size: 14px;
      width: 280px;

      @media (max-width: 640px) {
        width: 220px;
      }
    }

    button {
      background: #759775;
      cursor: pointer;
      color: ${colors.branco};
      margin-left: 10px;
      width: auto;
    }
  }

  a {
    text-decoration: none;
    h1 {
      color: ${colors.branco};
      font-size: 20px;
      font-weight: 500;
    }
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 90px;
      width: 90px;
    }

    //@media (max-width: 640px) {
    //flex-direction: column;
    //}
  }

  img {
    height: 110px;
    width: 110px;
    margin-right: 20px;
  }
`;
