import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import {fetchItemsSaga} from './sagas';

export function* watchSaga() {
  yield takeEvery(types.FETCH_ITEMS, fetchItemsSaga);
}
