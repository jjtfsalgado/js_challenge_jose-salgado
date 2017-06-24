import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import './styles/app.scss';
import { productsReducer } from './reducers/reducer';
import rootSaga from './sagas/sagas';
import router from './router';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  products: productsReducer,
  routing: routerReducer
});

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(hashHistory))
)

const history = syncHistoryWithStore(hashHistory, store)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      {router}
    </Router>
  </Provider>,
  document.getElementById('app')
);
