import './App.css'
import { SignIn } from './pages/SignIn/SignIn.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { HomeUsuario } from './pages/Home_usuario/Home_usuario.jsx'
import { HomeAdmin } from './pages/Home_admin/Home_admin.jsx'
import { Prato_usuario } from './pages/Prato_usuario/Prato_usuario.jsx'
import { Prato_admin } from './pages/Prato_admin/Prato_admin.jsx'
import { Adicionar_prato } from './pages/Adicionar_prato/Adicionar_prato.jsx'
import { Editar_prato } from './pages/Editar_prato/Editar_prato.jsx'

import { Routes } from './routes/index.jsx'

function App() {

  return (
    <>
      <Routes />
    </>
  )
}

export default App
