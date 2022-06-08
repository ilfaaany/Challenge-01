import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


