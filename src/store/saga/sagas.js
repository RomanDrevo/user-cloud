import { call, put } from 'redux-saga/effects';

import {fetchItemsApi} from '../../api';

export function* fetchItemsSaga() {
  try {
    const result = yield call(fetchItemsApi);

    console.log(result);

    // yield put(setItems(data));
  } catch (error) {
    // yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
