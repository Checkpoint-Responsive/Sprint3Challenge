import './cadastro_pessoa.css';
import { Link } from 'react-router-dom'
import {camera} from '../../img/camera';
import {sair} from '../../img/sair';


export default function CadastroPessoa() {
    return (
        <>
            <header>
                <h1>Cadastro Proprietário</h1>
            </header>

            <main>
                <section className="Cadastro_Prop">

                    <h2>Cadastre-se</h2>

                    <div className="form-group">
                        <label htmlFor="Name">Nome Completo:</label>
                        <input type="text" id="Name" className="custom-input" placeholder="Digite seu Nome Completo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" className="custom-input" placeholder="Digite seu CPF" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" className="custom-input" placeholder="Digite seu RG" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" className="custom-input" placeholder="Digite seu Endereço" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" className="custom-input" placeholder="Digite seu Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" className="custom-input" placeholder="Digite sua Senha" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="conf_email">Confirmar Email:</label>
                        <input type="email" id="conf_email" className="custom-input" placeholder="Confirme seu Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="conf_senha">Confirmar Senha:</label>
                        <input type="password" id="conf_senha" className="custom-input" placeholder="Confirme sua Senha" />
                    </div>

                    <img src="./img/pefil.png" alt="Perfil" />

                    <div className="box">
                    <p>Tire ua foto</p>
                    <button className="btnCamera"><img src={camera} alt="" /></button>
                    </div>
                    
                </section>
            </main>
            
            <footer className="footer">
                <Link to="/Home"> <img src={sair} alt="Sair"/> </Link>
            </footer>

        </>
    )
}
