import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import CadastroPessoa from './routes/CadastroPessoa/index.jsx'
import ChatBot from './routes/ChatBot/index.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Login from './routes/Login/index.jsx'
import Perfil from './routes/Perfil/index.jsx'
import RecuperacaoSenha from './routes/RecuperacaoSenha/index.jsx'
import './index.css'

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/CadastroPessoa" element={<CadastroPessoa />} />
      <Route path="/ChatBot" element={<ChatBot />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/RecuperacaoSenha" element={<RecuperacaoSenha />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{routing}</React.StrictMode>
)