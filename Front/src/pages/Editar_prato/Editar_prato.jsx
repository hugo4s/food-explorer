import React from "react";
import './Editar_prato.css'

import { LogoExplorer } from '../../components/logo_explorer/logo_explorer.jsx'
import busca from '../../assets/busca.svg'
import voltar from '../../assets/voltar.svg';
import exit from '../../assets/exit.svg'
import upload from '../../assets/upload.svg'
import x from '../../assets/x.svg'

import { Link } from 'react-router-dom';

export function Editar_prato() {
    return (
        <div>
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
               <Link to="/HomeAdmin">voltar</Link>
            </div>
            <div className="h2">
                <h2>Editar prato</h2>

            </div>
            <div className="envolve">

            <form>
                <div className="categoria">
                    <div className="gap">
                        <p>Imagem do prato</p>
                        <div className="imagem">
                            <input type="file" id="fileInput" />
                            <label for="fileInput">
                                <img src={upload} alt="Ícone de upload" /> Selecione Imagem
                            </label>
                        </div>
                    </div>
                    <div className="nome">
                        <p>Nome</p>
                        <input type="text" placeholder="Ex.: Salada Ceasar" />
                    </div>
                    <div className="gap">
                        <p>Categoria</p>
                        <select id="opcoes" name="opcoes">
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                        </select>
                    </div> 
                </div>
                <div className="categoria">
                     <div className="gap">
                        <p>Ingredientes</p>
                        <div className="conjunto">
                            <div className="pao">
                                <p>Pão Naan</p>
                                <img src={x}/>
                            </div>
                            <input type="text" placeholder="Adicionar +"/>
                        </div>
                     </div>
                     <div className="preço">
                        <p>Preço</p>
                        <input type="text" placeholder="R$ 00,00" />
                     </div>
                </div>
                <div className="gap">
                    <p>Descrição</p>
                    <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição          "></textarea>
                </div>
            </form>
            </div>
            <div className="button">
                <button id = "but1" >Excluir prato</button>
                <button>Salvar alterações </button>
            </div>
        </div>
    )
}