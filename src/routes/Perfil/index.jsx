import './Perfil.css';

import { Link } from 'react-router-dom'
import {barra} from '../../img/barraStatus.png';
import {perfil} from '../../img/perfil.png';
import {sair} from '../../img/sair.png';


export default function Perfil() {
    return (
        <>
            <header>
                <h1>Olá Alexandre!</h1>

                <p>Status do seguro</p>

                <div className="img">
                    <img src={barra} alt="Ativo" />
                </div>

                <div className="perfil">
                    <Link to="/Perfil"> <img src={perfil} alt="foto perfil"/> </Link>
                </div>
            </header>

            <main>

                <section>

                <div className="Titulo">
                    <h1>Ajuda?</h1>
                </div>

                <div className="opcoes">

                  <p>Dados Pessoais</p>
                  <p>Detalhes do seguro</p>
                  <p>Contrato</p>
                  <p>Termos de uso</p>  
                    
                </div>

                </section>

            </main>

            <footer className="footer">
                <Link to="/Home"> <img src={sair} alt="Sair"/> </Link>
            </footer>
        </>
    )
}
  