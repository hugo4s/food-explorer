import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import sabore from '../../assets/sabores.png'
import './Home_usuario.css';
import Cardapio from '../../components/Cardápio/Cardapio.jsx';
import food_explorer_gray from '../../assets/food_explorer_gray.svg'

export function HomeUsuario() {
    return (
        <div className='home'>
            <Header/>
            <div className='taste'>
                <img src={sabore} />
                <div className='lego'>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>
            <div className='refeiçoes'>
                    <Cardapio
                        nome="Refeições"
                    />
                    <Cardapio
                        nome="Sobremesas"
                    />
                    <Cardapio
                        nome="Bebidas"
                    />
            </div>
           
        </div>
    )
}