import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'session', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuário não é prestador');
            return;
        }

        yield put(signInSucess(token, user));

        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { email, name, password } = payload;

        yield call(api.post, 'user', {
            email,
            name,
            password,
            provider: true,
        });

        history.push('/');
    } catch (error) {
        toast.error('Falha no cadastro, verifique seus dados');
        put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload;

    if (token) {
        console.log('AUQI');
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
