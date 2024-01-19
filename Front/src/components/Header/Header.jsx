import './Header.css'
import React from 'react'
import { LogoExplorer } from '../logo_explorer/logo_explorer'
import exit from '../../assets/exit.svg'
import pedidos from '../../assets/pedidos.svg'
import busca from '../../assets/busca.svg'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className='header'>
            <LogoExplorer className="small"/>
            <div className="search-container">
                <img src={busca} alt="Ícone de busca" />
                <input type="text" placeholder='Busque por pratos ou ingredientes'/>
            </div>
            <button className='pedidos'><img src={pedidos} /> Pedidos (0)</button>
           <Link to="/signIn" className='exit'><img src={exit} /></Link>
        </div>
    )
}