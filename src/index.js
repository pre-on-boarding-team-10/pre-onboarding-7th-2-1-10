import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Router from './router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

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

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, <App />);
} else {
  root.render(<App />);
}
