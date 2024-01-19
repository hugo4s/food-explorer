import React from 'react';
import './Home_admin.css';

import Cardapio_admin from '../../components/Cardapio_admin/Cardapio_admin.jsx';
import { LogoExplorer } from '../../components/logo_explorer/logo_explorer.jsx'

import sabore from '../../assets/sabores.png'
import food_explorer_gray from '../../assets/food_explorer_gray.svg'
import busca from '../../assets/busca.svg'
import exit from '../../assets/exit.svg'

import { Link } from 'react-router-dom';



export function HomeAdmin() {
    return (
        <div className='home'>
            <div className='header'>
                <div className='beta'>
                    <LogoExplorer className="small"/>
                    <p>admin</p>
                </div>
                <div className="search-container">
                    <img src={busca} alt="Ícone de busca" />
                    <input type="text" placeholder='Busque por pratos ou ingredientes'/>
                </div>
                <Link className='pedidos' to="/adicionarPrato">Novo prato</Link>
                <Link to="/" className='exit'><img src={exit} /></Link>
            </div>
            <div className='taste'>
                <img src={sabore} />
                <div className='lego'>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>
            <div className='refeiçoes'>
                    <Cardapio_admin
                        nome="Refeições"
                    />
                    <Cardapio_admin
                        nome="Sobremesas"
                    />
                    <Cardapio_admin
                        nome="Bebidas"
                    />
            </div>
        </div>
    )
}