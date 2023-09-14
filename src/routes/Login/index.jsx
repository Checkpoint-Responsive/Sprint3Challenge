import './login.css';
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
        <main className="container">
            <div className="head">
            <Link to="/Perfil"> <img src="#" alt="foto perfil"/> </Link>
            </div>
        
            <div>
                <form action="#">
                    <div className="divInput">
                        <input type="text"  className="input"  name="txtUserName" id="idUserName" placeholder="UserName" />
                    </div>
                    <div className="divInput">
                        <input type="password"  className="input"  name="txtpassword" id="idpassword" placeholder="Senha" />
                        </div>
        
                        <div className="btn">
                        <button type="submit" className="btnEntrar">Entrar</button>
                        </div>
                        
                        <div className="pLinks">
                        <p className="primeiroLink"> <Link to="/RecuperacaoSenha">Esqueci minha senha</Link> </p>
                        <p className="cadastre"> <Link to="/CadastroPessoa">Cadastre-se</Link> </p>
                        </div>

                </form>
                
            </div>
            
        </main>

        <footer className="footer">

            <img src="#" alt="logo porto seguro"/>
        </footer>

    </>
  )
}