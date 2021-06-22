import React from 'react';
import LoadingGif from '../../images/loading.gif';
import { LoadingContainer } from './style';

export default function Loading(): JSX.Element {
  return (
    <LoadingContainer>
      <img src={LoadingGif} alt="loading gif" />
    </LoadingContainer>
  );
}
