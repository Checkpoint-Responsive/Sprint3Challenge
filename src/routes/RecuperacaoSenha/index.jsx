import './RecuperacaoSenha.css';
import { Link } from 'react-router-dom'
import { perfil } from '../img/perfil.png';
import { logoporto } from '../img/portoSeguro.png';
import { sair } from '../img/sair.png';


export default function RecuperacaoSenha() {
  return (
    <>

    <main className="container">

        <div className="head">
            <img src={ logoporto } alt="Logo da porto"/>
            <Link to="/Perfil"> <img src={perfil} alt="foto perfil"/> </Link>
        </div>

        <div>
          <h1>Recuperação de Senha</h1>
            <form action="#">
                <div className="divInput">
                    <input type="text"  className="input"  name="txtRecSenha" id="idRecSenha" placeholder="Recuperação de Senha" />
                </div>
                  <div className="btn">
                    <button type="submit" className="btnReenviar">Reenviar Senha</button>
                  </div>
            </form>
        </div>

    </main>

    <footer className="footer">
        <Link to="/Login">Sair <img src={sair} alt="Sair"/> </Link>
        <p><Link to="/Login">Sair </Link></p>
    </footer>
    </>
  )}