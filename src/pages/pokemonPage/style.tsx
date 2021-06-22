import styled from 'styled-components';
import * as colors from '../../styles/colors';

type IStyle = {
  MainColor: string;
};

export const MainContainer = styled.main<IStyle>`
  max-width: 1720px;
  margin: 50px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .basic_informations {
    transform: perspective(400px) rotateY(30deg);

    &:hover {
      transition: all 0.3s;
      transform: perspective(0px) rotateY(0deg);
    }

    .information {
      display: flex;
      align-items: center;
      margin: 20px 0;

      h2 {
        color: ${colors.cinzaEscuro};
        text-transform: uppercase;
        margin-right: 35px;
        font-size: 22px;
        font-weight: 100;
      }

      p {
        color: ${colors.cinzaEscuro};
        text-transform: uppercase;
        margin-right: 35px;
        font-size: 16px;
        font-weight: 100;
      }

      .pokemon_types,
      .pokemon_forms {
        display: flex;
        li {
          background: ${(props: IStyle) => props.MainColor};
          border-radius: 20px;
          color: ${(props: IStyle) =>
            props.MainColor === '#e2e32b' ? colors.cinzaEscuro : colors.branco};
          padding: 10px;
          text-transform: uppercase;
          font-weight: 100;
          list-style: none;
          margin-right: 15px;

          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
  }

  .main_informations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${colors.cinzaEscuro};
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 100;
    }
  }
`;
