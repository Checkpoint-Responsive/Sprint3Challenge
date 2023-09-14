import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './routes/Cadastro/index.jsx'
import CadastroPessoa from './routes/CadastroPessoa/index.jsx'
import ChatBot from './routes/ChatBot/index.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Login from './routes/Login/index.jsx'
import Perfil from './routes/Perfil/index.jsx'
import RecuperacaoSenha from './routes/RecuperacaoSenha/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/Cadastro",
        element: <Cadastro/>
      },
      {
        path: "/CadastroPessoa",
        element: <CadastroPessoa/>
      },
      {
        path: "/DadosBicicleta",
        element: <ChatBot/>
      },
      {
        path: "/Perfil",
        element: <Perfil/>
      },
      {
        path: "/RecuperacaoSenha",
        element: <RecuperacaoSenha/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)