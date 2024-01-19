import './Prato_usuario.css'
import React from 'react'
import { Header } from '../../components/Header/Header';
import voltar from '../../assets/voltar.svg';
import food_explorer_gray from '../../assets/food_explorer_gray.svg'
import comida from '../../assets/Mask group-2.png';
import menos from '../../assets/menos.svg'
import mais from '../../assets/mais.svg'
import { Link } from 'react-router-dom';

export function Prato_usuario() {
    return (
        <div className='tudo'>
            <Header/>
            <div className='voltar'>
               <img src={voltar} />
               <Link to="/" >voltar</Link>
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
                        <div className='quant'>
                            <img src={menos} />
                            <p>01</p>
                            <img src={mais} />
                        </div>
                        <button>incluir ∙ R$ 25,00</button>
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
