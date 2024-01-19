import { Routes, Route } from 'react-router-dom';

import { HomeUsuario } from '../pages/Home_usuario/Home_usuario.jsx'
import { HomeAdmin } from '../pages/Home_admin/Home_admin.jsx'
import { Prato_usuario } from '../pages/Prato_usuario/Prato_usuario.jsx'
import { Prato_admin } from '../pages/Prato_admin/Prato_admin.jsx'
import { Adicionar_prato } from '../pages/Adicionar_prato/Adicionar_prato.jsx'
import { Editar_prato } from '../pages/Editar_prato/Editar_prato.jsx'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeUsuario/>} />
            <Route path='/prato' element={<Prato_usuario/>} />
            <Route path='/pratoAdmin' element={<Prato_admin/>} />
            <Route path='/HomeAdmin' element={<HomeAdmin/>}/>
            <Route path='/adicionarPrato' element={<Adicionar_prato/>}/>
            <Route path='/editarPrato' element={<Editar_prato/>}/>
        </Routes>
    )
}