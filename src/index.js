import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import './styles/app.scss';
import { productsReducer } from './reducers/reducer';
import rootSaga from './sagas/sagas';
import App from './components/app';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  products: productsReducer,
  routing: routerReducer
});

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
