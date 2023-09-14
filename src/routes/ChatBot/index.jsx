import './Chatbot.css';
import { Link } from 'react-router-dom'

export default function Chatbot() {
    return (
        <>
            <header>
                <h1>Portinho</h1>
                <p>Assistente Virtual</p>

                <img src="#" alt="Portinho" />
                <img src="#" alt="Fundo" />
                <div>
                <Link to="/Home"> <img src="#" alt="Sair"/> </Link>
                </div>
            </header>

            <main>
                <section>

                <div className="container">
                    <div className="box" id="box1"></div>
                    <div className="box" id="box2"></div>
                    <div className="box" id="box3"></div>
                </div>
                </section>
            </main>
            
            <footer className="footer">

                <div className="divInput">
                    <input type="text"  className="Input"  name="txtInput" id="idInput" placeholder="Digite sua mensagem" />
                </div>

                <div className="box">
                    <button className="btnMicrofone"><img src="#" alt="" /></button>
                </div>
            </footer>

        </>
    )
}