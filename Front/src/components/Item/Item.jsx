import './Item.css'
import React from 'react'
import menos from '../../assets/menos.svg'
import mais from '../../assets/mais.svg'
import coraçao from '../../assets/coraçao.svg'

export function Item({ imagem, titulo, descricao, preço, quantidade }) {
    return (
        <div className='prato'>
            <div className='img'>
                <img className='comida' src={imagem} alt="item" />
                <img className='coraçao' src={coraçao} alt="coração" />
            </div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p className='preço'>{preço}</p>
            <div className='box'>
                <div className='quantidade'>
                    <img src={menos} alt="menos" />
                    <p>{quantidade}</p>
                    <img src={mais} alt="mais" />
                </div>
                <button>Incluir</button>
            </div>
        </div>
    )
}
