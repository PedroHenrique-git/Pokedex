import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Index from './pages/Index/Index';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Index />
    </>
  );
}

export default App;
