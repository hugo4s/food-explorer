import { LogoExplorer } from '../../components/logo_explorer/logo_explorer.jsx'
import React from 'react';
import { Link } from 'react-router-dom';


export function SignUp() {
    return (
        <div className='sign'>     
            <LogoExplorer className="logo" />
            <div className='formulario'>
                <h2>Crie a sua conta</h2>

                <div className='input'>
                    <label>Nome</label>
                    <input type="text" placeholder='Exemplo: Maria da Silva'/>
                </div>

                <div className='input'>
                    <label>Email</label>
                    <input type="email" placeholder='Exemplo: exemplo@exemplo.com.br'/>
                </div>

                <div className='input'>
                    <label>Senha</label>
                    <input type="password" placeholder='Min: 6 caracteres'/>
                </div>

                <button>Criar conta</button>

                <Link to="/">Já tenho uma conta</Link>
            </div>
        </div>
    )
}