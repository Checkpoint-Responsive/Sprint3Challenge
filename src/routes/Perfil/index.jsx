import './Perfil.css';

import { Link } from 'react-router-dom'
import perfil from '../img/perfil.png'
import imgsair from '../img/sair.png'

export default function Perfil() {
    return (
        <>
            <header className='header'>
                <div className='conteudo'> 
                    <h1>Olá Alexandre!</h1>

                    <div className='labelStatus'>
                    <p>Status do seguro</p>
                    </div>

                    <div className='status'><h7 >Ativo</h7>  </div>
                </div>

                <div className="perfil">
                    <Link to="/Perfil"> <img src={perfil} alt="foto perfil"/> </Link>
                </div>
            </header>

            <main>

                <section className='secao'>

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
                <img src={imgsair} alt="Sair"/>
                <Link to="/" className='linkFooter'>Sair </Link>
            </footer>
        </>
    )
}
  