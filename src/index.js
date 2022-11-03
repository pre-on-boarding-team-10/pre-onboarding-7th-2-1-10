import React from 'react';
import { hydrate } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Router from './router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  );
};

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(<App />);
}
