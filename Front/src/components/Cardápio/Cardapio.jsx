import './Cardapio.css'
import React from 'react'
import {Item} from '../Item/Item'
import comida from '../../assets/Mask group-2.png'
import seta_direita from '../../assets/seta_direita.svg'
import seta_esquerda from '../../assets/seta_esquerda.svg'

export default function Cardapio({nome}) {
    return (
        <div className='refe'>
            <h2>{nome}</h2>
            <div className='lista'>
                <div className='gradiente1'><img src={seta_esquerda} /></div>
                <Item 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <div className='gradiente2'><img src={seta_direita} /></div>
            </div>
        </div>
    )
}
