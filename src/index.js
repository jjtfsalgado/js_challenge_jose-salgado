import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import './styles/app.scss';
import { reducer } from './reducers/reducer';
import rootSaga from './sagas/sagas';
import HelloWorld from './components/hello_world';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducer: reducer,
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
      <Route path="/" component={ HelloWorld }/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
