// import Menu from "../components/menu";

const PerfilContent = () => {
    return (
        <div className="perfil-wrapper">
            <div className="container">
                <section className="form-section">
                    <h2>Perfil</h2>
                    <form>
                        <fieldset>
                            <legend>Dados Pessoais</legend>

                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" placeholder="Informe seu nome completo" />

                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" placeholder="Informe os números do seu CPF" />

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="Informe o seu e-mail" />

                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" placeholder="••••••" />
                        </fieldset>

                        <button type="submit">Salvar Alterações</button>
                        <div className="sair">
                            <button type="submit">Sair</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

const Perfil = () => {
    // return (
    //     <Menu>
    //         <PerfilContent />
    //     </Menu>
    // );
};

export default Perfil;
