import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { updateProfileSucess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

        const response = yield call(api.put, 'user', profile);

        toast.success('Perfil Atualizado com sucesso!');

        yield put(updateProfileSucess(response.data));
    } catch (error) {
        toast.error('Erro ao atualizar perfil, confira seus dados!');
        yield put(updateProfileFailure);
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
