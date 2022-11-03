import React from 'react';
import { hydrate, render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Router from './router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// const rootElement = document.getElementById('root');

// const root = ReactDOM.createRoot(rootElement);

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

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
