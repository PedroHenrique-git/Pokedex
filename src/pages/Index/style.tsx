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
    margin: 50px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background: ${colors.azulMarinho};
      border-radius: 20px;
      border: none;
      color: ${colors.branco};
      cursor: pointer;
      outline: none;
      height: 50px;
      padding: 10px;
      width: 300px;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
