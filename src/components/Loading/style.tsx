import styled from 'styled-components';
import { branco } from '../../styles/colors';

export const LoadingContainer = styled.div`
  background: rgba(${branco}, 0.4);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
