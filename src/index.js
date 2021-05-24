import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { PersistGate } from "redux-persist/lib/integration/react";
import { createBrowserHistory } from 'history';
const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();