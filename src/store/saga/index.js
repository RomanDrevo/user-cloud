import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {fetchUsersSaga, loginSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.LOGIN, loginSaga);
  yield takeEvery(types.FETCH_USERS, fetchUsersSaga);
}
