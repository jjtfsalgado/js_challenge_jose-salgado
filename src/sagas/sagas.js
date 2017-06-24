// import { takeEvery, fork, put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

// function* changePage(action) {
//   console.log(action);
//   try {
//     const pagination = yield put({ type: 'MODIFY_PAGINATION', payload: action.payload });
//     console.log(pagination);
//   } catch(error) {
//     yield put({ type: 'MODIFY_PAGINATION', payload: error });
//   }
// }

// function* watchHelloAsync() {
//   yield takeEvery("sf", changePage);
// }

// export default function* rootSaga() {
//   yield [
//     fork(watchHelloAsync)
//   ];
// }
