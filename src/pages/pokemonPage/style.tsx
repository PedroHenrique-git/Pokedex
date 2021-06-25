import styled from 'styled-components';
import * as colors from '../../styles/colors';

type IStyle = {
  MainColor: string;
  qtdForms: number;
};

export const MainContainer = styled.main<IStyle>`
  max-width: 1720px;
  margin: 100px auto 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 1062px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    margin: 20px auto;
  }

  .basic_informations {
    transform: perspective(400px) rotateY(30deg);

    @media (max-width: 1062px) {
      transform: perspective(0px) rotateY(0deg);
    }

    &:hover {
      transform: perspective(0px) rotateY(0deg);
      transition: all 0.3s;
    }

    .pokemon_title_mobile {
      display: none;
      color: ${colors.cinzaEscuro};
      text-transform: uppercase;
      font-size: 24px;
      font-weight: 100;
      text-align: center;
      margin-bottom: 40px;

      @media (max-width: 1062px) {
        display: block;
      }
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

  .pokemon_forms {
    flex-direction: ${(props: IStyle) =>
      props.qtdForms > 3 ? 'column' : 'row'};

    li {
      margin-top: ${(props: IStyle) => (props.qtdForms > 3 ? '10px' : '0px')};

      &:last-of-type {
        margin-top: ${(props: IStyle) =>
          props.qtdForms > 3 ? '10px' : '0px'} !important;
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

      @media (max-width: 1062px) {
        display: none;
      }
    }

    img {
      @media (max-width: 640px) {
        height: 350px;
        width: 350px;
      }
    }
  }

  .pokemon_stats {
    transform: perspective(400px) rotateY(-30deg);

    @media (max-width: 1062px) {
      transform: perspective(0px) rotateY(0deg);
    }

    &:hover {
      transform: perspective(0px) rotateY(0deg);
      transition: all 0.3s;
    }

    .stat {
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
        background: ${(props: IStyle) => props.MainColor};
        border-radius: 20px;
        color: ${(props: IStyle) =>
          props.MainColor === '#e2e32b' ? colors.cinzaEscuro : colors.branco};
        text-transform: uppercase;
        margin-right: 35px;
        padding: 10px;
        font-size: 16px;
        font-weight: 100;
      }
    }
  }
`;
