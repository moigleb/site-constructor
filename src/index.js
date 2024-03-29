import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './containers/AppRouter';
import * as serviceWorker from './serviceWorker';
import store, {persistor} from "./store/index";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";


const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
  , MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
