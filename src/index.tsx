import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { STORE } from './redux/store';
import { App } from './layout/app';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './assets/styles';

const CONTAINER = document.getElementById('root')!;
const ROOT = createRoot(CONTAINER);

ROOT.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
