import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('Informe o e-mail'),
    password: Yup.string()
        .min(6, 'No minimo 6 caracteres')
        .required('A senha é obrigatório'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={Logo} alt="Gobarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">
                    {loading ? 'Carregando....' : 'Acessar'}
                </button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
