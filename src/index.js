import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStlye = createGlobalStyle`
  body{
    font-family: Georgia, 'Times New Roman', Times, serif;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    #a27b60 20%,
    #f2eddf 20%,
    #f2eddf 80%,
    #a27b60 80%
  );
  }`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStlye />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
