import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {loginSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.LOGIN, loginSaga);
}
