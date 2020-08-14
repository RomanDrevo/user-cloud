import {call, put} from 'redux-saga/effects';
import {
    openNotification,
    setLoading,
    toggleDeleteUserModal,
    toggleErrorWindowIsOpen
} from '../actions/uIStateActions';
import {createUserApi, deleteUserApi, fetchUsersApi, loginApi} from '../../api';
import {loginSuccess} from '../actions/authActions';
import {deleteUserSuccess, setUsersToStore} from '../actions/usersActions';
import {setAlert} from '../actions/alertActions';
import {NOTIFICATIONS} from '../../utils/constatns';

export function* loginSaga(data) {
    try {
        yield put(setLoading(true));
        const response = yield call(loginApi, data.payload);

        if (response.status === 200 && response.data.token) {
            localStorage.setItem('token', response.data.token);
            yield put(loginSuccess(data.payload.email));
        }
        yield put(setLoading(false));

    } catch (error) {
        console.log('---e:', error);
        yield put(setLoading(false));

        yield put(
            setAlert({
                status: 'error',
                title: 'Error',
                message: error.message
            })
        );
        yield put(toggleErrorWindowIsOpen());

    }
}

export function* fetchUsersSaga() {
    try {
        yield put(setLoading(true));
        const response = yield call(fetchUsersApi);

        if (response.status === 200 && response.data) {
            yield put(setUsersToStore(response.data));
        }

        yield put(setLoading(false));

    } catch (error) {
        yield put(setLoading(false));
        yield put(
            setAlert({
                status: 'error',
                title: 'Error',
                message: error.message
            })
        );
        yield put(toggleErrorWindowIsOpen());
    }
}

export function* deleteUserSaga(data) {
    try {
        yield put(setLoading(true));
        const response = yield call(deleteUserApi, data);
        if (response.status === 200 && response.data.deletionTime) {
            yield put(deleteUserSuccess(data.payload));
            yield put(toggleDeleteUserModal());
            yield put(openNotification(NOTIFICATIONS.delete));
        }
        yield put(setLoading(false));
    } catch (error) {
        yield put(setLoading(false));
        yield put(
            setAlert({
                status: 'error',
                title: 'Error',
                message: error.message
            })
        );
        yield put(toggleErrorWindowIsOpen());
    }
}

export function* createUserSaga(data) {
    try {
        yield put(setLoading(true));
        const newUser = data.payload;
        newUser.id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
        newUser.BirthDate = new Date(newUser.birthDate).getTime();
        delete newUser.birthDate;
        const response = yield call(createUserApi, data);
        if (response.status === 200 && response.data) {
            yield put(openNotification(NOTIFICATIONS.add));
        }
        yield put(setLoading(false));
    } catch (error) {
        yield put(setLoading(false));
        yield put(
            setAlert({
                status: 'error',
                title: 'Error',
                message: error.message
            })
        );
        yield put(toggleErrorWindowIsOpen());
    }
}
