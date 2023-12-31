import './Home.css';
import { Link } from 'react-router-dom';
import imgBike from '../img/bicicleta.png';
import imgLogoPorto from '../img/portoSeguro.png';


export default function Home() {
    return (
        <>
            <header>
            
                <div className = "LogoPorto">
                <img src={imgLogoPorto} alt="Logo da porto"/>
                </div>
            </header>

            <main>

                <section>

                <div className="Titulo">
                    <h1>Bem vindo a Porto Seguro bike!</h1>
                </div>

                <div className="img">
                    <img src={imgBike} alt="Bicicleta"/>
                </div>

                <div className="texto">
                    <p>Uma solução completa que vai além de um simples seguro para bicicleta, proporcionando proteção e uma ampla gama de serviços para que você possa se aventurar sem preocupações.</p>
                </div>

                <div className="btn">
                  <button type="submit" className="btnCotacao"> <Link to="/Chatbot" className='linkCotacao'>Faça uma cotação</Link> </button>
                </div>

                </section>

            </main>
            
            <footer className="footer">

                <div className="Link">
                <p> <Link to="/Login">Ja sou cliente</Link> </p>
                </div>
                
            </footer>

        </>
    )
}
