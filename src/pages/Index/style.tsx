import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const MainContainer = styled.main`
  margin: 50px auto;
  max-width: 1720px;

  .pokemon_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
      text-decoration: none;
    }
  }

  .load_more_container {
    margin: 50px auto;
    max-width: 900px;

    @media (max-width: 640px) {
      max-width: 340px;
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    button {
      background: ${colors.azulMarinho};
      border-radius: 50%;
      border: none;
      color: ${colors.branco};
      cursor: pointer;
      outline: none;
      height: 35px;
      padding: 10px;
      width: 35px;
      font-size: 16px;
      margin-right: 10px;
      font-weight: bold;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 640px) {
        margin-top: 10px;
      }
    }
  }
`;
