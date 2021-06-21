import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const HeaderContainer = styled.header`
  background: ${colors.azulMarinho};
  color: ${colors.branco};
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 110px;
    width: 110px;
    margin-right: 20px;
  }
`;
