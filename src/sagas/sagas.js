import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

function* messageAgain() {
  try {
    yield call(delay, 2000);
    yield put({ type: 'HELLO_WORLD_AGAIN', payload: 'Hello World Async with redux-saga' });

  } catch(error) {
    yield put({ type: 'HELLO_WORLD_AGAIN', payload: error });
  }
}

function* watchHelloAsync() {
  yield takeEvery('HELLO_WORLD', messageAgain);
}

export default function* rootSaga() {
  yield [
    fork(watchHelloAsync)
  ];
}
