import React from 'react'
import './Cardapio_admin.css'

import {Item_admin} from '../Item_admin/Item_admin'

import comida from '../../assets/Mask group-2.png'
import seta_direita from '../../assets/seta_direita.svg'
import seta_esquerda from '../../assets/seta_esquerda.svg'

export default function Cardapio({nome}) {
    return (
        <div className='refe'>
            <h2>{nome}</h2>
            <div className='lista'>
                <div className='gradiente1'><img src={seta_esquerda} /></div>
                <Item_admin 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item_admin 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item_admin 
                    imagem = {comida}
                    titulo= "Spaguetti Gambe"
                    descricao= "Massa fresca com camarões e pesto."
                    preço= "R$ 79,97"
                    quantidade= "01"
                />
                <Item_admin 
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
