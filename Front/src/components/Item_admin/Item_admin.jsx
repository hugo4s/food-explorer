import './Item_admin.css'
import React from 'react'
import lapis from '../../assets/lapis.svg'

import { Link } from 'react-router-dom';


export function Item_admin({ imagem, titulo, descricao, preço }) {
    return (
        <div className='prato'>
            <div className='img'>
                <img className='comida' src={imagem} alt="item" />
                <Link to="/editarPrato"><img className='coraçao' src={lapis} /></Link>
            </div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p className='preço'>{preço}</p>
        </div>
    )
}
