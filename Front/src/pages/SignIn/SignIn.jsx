import './SignIn.css';
import { LogoExplorer } from '../../components/logo_explorer/logo_explorer.jsx'
import React from 'react';
import { Link } from 'react-router-dom';

export function SignIn() {
    return (
        <div className='sign'>     
            <LogoExplorer className="logo" />
            <div className='formulario'>
                <h2>Faça login</h2>

                <div className='input'>
                    <label>Email</label>
                    <input type="email" placeholder='Exemplo: exemplo@exemplo.com.br'/>
                </div>

                <div className='input'>
                    <label>Senha</label>
                    <input type="password" placeholder='Min: 6 caracteres'/>
                </div>

                <button>Entrar</button>

                <Link to="/register" >Criar uma conta</Link>
            </div>
        </div>
    )
}