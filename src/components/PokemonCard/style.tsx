import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const CardPokemon = styled.li`
  border: 2px solid ${colors.azulMarinho};
  border-radius: 5px;
  background: ${colors.branco};
  cursor: pointer;
  width: 250px;
  height: 250px;
  list-style: none;
  margin: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    margin-left: 0;
  }

  h1 {
    font-size: 20px;
    color: ${colors.azulMarinho};
    word-break: break-all;
  }

  img {
    height: 180px;
    width: 180px;
  }

  &:hover {
    transform: scale(1.3);
    transition: all 0.3s;
  }
`;
