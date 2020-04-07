import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('Informe o e-mail'),
    password: Yup.string()
        .min(6, 'No minimo 6 caracteres')
        .required('A senha é obrigatório'),
});

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={Logo} alt="Gobarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Criar Conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
