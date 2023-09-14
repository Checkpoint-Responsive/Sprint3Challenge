import './login.css';
import { Link } from 'react-router-dom'
import {perfil} from '../../img/perfil.png';
import {logoporto} from '../../img/portoSeguro.png';

export default function Login() {
  return (
    <>
    <main className="container">
      <div className="head">
      <Link to="/pagina-perfil"> <img src={perfil} alt="foto perfil"/> </Link>
      </div>
  
      <div>
          <form action="#">
              <div className="divInput">
                  <input type="text"  class="input"  name="txtUserName" id="idUserName" placeholder="UserName" />
              </div>
              <div className="divInput">
                  <input type="password"  class="input"  name="txtpassword" id="idpassword" placeholder="Senha" />
                </div>
  
                <div className="btn">
                  <button type="submit" class="btnEntrar">Entrar</button>
                </div>
                
                <div className="pLinks">
                  <p className="primeiroLink"><Link to="/recuperacao-senha">Esqueci minha senha</Link></p>
                  <p><Link to="/cadastro-pessoa">Cadastre-se</Link>
</p>
                </div>
          </form>
  
          
      </div>
      
  </main>
  <footer className="footer">
      <img src={logoporto} alt="logo porto seguro"/>
  </footer>
    </>
  )};