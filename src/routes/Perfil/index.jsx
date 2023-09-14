import './Perfil.css';

import { Link } from 'react-router-dom'



export default function Perfil() {
    return (
        <>
            <header className='Header'>
                <h1>Olá Alexandre!</h1>

                <p>Status do seguro</p>

                <h7>Ativo</h7>  

                <div className="perfil">
                    <Link to="/Perfil"> <img src="#" alt="foto perfil"/> </Link>
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
                <Link to="/Home"> <img src="#" alt="Sair"/> </Link>
            </footer>
        </>
    )
}
  