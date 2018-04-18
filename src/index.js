'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  combineReducers,
  createStore,
} from 'redux';

import {
  Provider,
} from 'react-redux';

import countReducer from './countReducer';

import App from './App';

const reducers = combineReducers({
  countReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
