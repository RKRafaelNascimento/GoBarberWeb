import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={Logo} alt="Gobarber" />

            <form>
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </form>
        </>
    );
}
