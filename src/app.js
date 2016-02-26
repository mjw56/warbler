import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import configureStore from './store/configureStore';
import 'immutable-console-log';
var css = require("../node_modules/bootstrap/dist/css/bootstrap.css");

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);