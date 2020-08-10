import { call, put } from 'redux-saga/effects';
import {setLoading} from '../actions/uIStateActions';
import {loginApi} from '../../api';
import {loginSuccess, setIsAuthenticated} from "../actions/authActions";

export function* loginSaga(data) {
  try {
    yield put(setLoading(true));
    // yield put(killSvg());
    const response = yield call(loginApi, data.payload);

    console.log(response);

    if (response.status === 200 && response.data.token) {
      localStorage.setItem('token', response.data.token);
      yield put (loginSuccess(data.payload.email))
    }

    // else if (response.data.code === 401) {
    //   yield put(
    //       setAlert({
    //         status: ALERT_STATUSES.error,
    //         title: response.data.status,
    //         message: response.data.message
    //       })
    //   );
    //   yield put(toggleErrorWindowIsOpen());
    // }

    yield put(setLoading(false));

  } catch (error) {
    console.log(error);
    // yield put(setLoading(false));
    //
    // let errorMessage = error.toString();
    // if (error?.response?.data?.message) errorMessage = error.response.data.message;
    // else if (error?.response?.data?.error) errorMessage = error.response.data.error;
    //
    // yield put(
    //     setAlert({
    //       status: ALERT_STATUSES.error,
    //       title: 'Error',
    //       message: errorMessage
    //     })
    // );
  }
}
