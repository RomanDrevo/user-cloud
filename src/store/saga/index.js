import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {createUserSaga, deleteUserSaga, fetchUsersSaga, loginSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.LOGIN, loginSaga);
  yield takeEvery(types.FETCH_USERS, fetchUsersSaga);
  yield takeEvery(types.DELETE_USER, deleteUserSaga);
  yield takeEvery(types.CREATE_USER, createUserSaga);
}
