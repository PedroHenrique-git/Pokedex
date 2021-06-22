import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
