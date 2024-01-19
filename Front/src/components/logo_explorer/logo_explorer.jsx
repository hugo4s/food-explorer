import './logo_explorer.css'
import React from 'react'
import logo from '../../assets/explorer.svg'

export function LogoExplorer({className}) {
    return (
        <div className={className}>
            <img src={logo} alt="food explorer logo"  />
            <h1>food explorer</h1>
        </div>
    )
}