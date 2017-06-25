import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import './styles/app.scss';
import { productsReducer } from './reducers/reducer';
import router from './router';

const reducers = combineReducers({
  products: productsReducer,
  routing: routerReducer
});

const store = createStore(
  reducers,
  applyMiddleware(createLogger(), routerMiddleware(hashHistory))
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      {router}
    </Router>
  </Provider>,
  document.getElementById('app')
);
