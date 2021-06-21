import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const CardPokemon = styled.li`
  border: 2px solid ${colors.azulMarinho};
  border-radius: 50%;
  background: ${colors.branco};
  cursor: pointer;
  width: 190px;
  height: 190px;
  list-style: none;
  margin: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 20px;
    color: ${colors.azulMarinho};
  }

  img {
    height: 120px;
    width: 120px;
  }

  &:hover {
    transform: scale(1.3);
    transition: all 0.3s;
  }
`;
