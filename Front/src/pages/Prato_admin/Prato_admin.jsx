import './Prato_admin.css'
import React from 'react'

import { LogoExplorer } from '../../components/logo_explorer/logo_explorer.jsx'


import voltar from '../../assets/voltar.svg';
import food_explorer_gray from '../../assets/food_explorer_gray.svg'
import comida from '../../assets/Mask group-2.png';
import busca from '../../assets/busca.svg'
import exit from '../../assets/exit.svg'


export function Prato_admin() {
    return (
        <div className='tudo'>
            <div className='header'>
                <div className='beta'>
                    <LogoExplorer className="small"/>
                    <p>admin</p>
                </div>
                <div className="search-container">
                    <img src={busca} alt="Ícone de busca" />
                    <input type="text" placeholder='Busque por pratos ou ingredientes'/>
                </div>
                <button className='pedidos'>Novo prato</button>
                <button className='exit'><img src={exit} /></button>
            </div>
            <div className='voltar'>
               <img src={voltar} />
               <p>voltar</p>
            </div>
            <div className='sei'>
                <img src={comida} />
                <div className='texto'>
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    <div className='grupo'>
                        <div className='alface'>alface</div>
                        <div className='alface'>camarão</div>
                    </div>
                    <div className='f'>
                        <button>Editar prato</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footer'>
                    <img src={food_explorer_gray} />
                    <p>food explorer</p>
                </div>
                <p>© 2023 - Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}
