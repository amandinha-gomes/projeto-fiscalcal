// import {
//     useState
// }

// import grafico from "../img/materia.svg"; 

//     from "react";

import React, { useState } from "react";
import materia from "../img/materia.svg";


const CadastroMateriaPrima = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        if (file) {
            alert(`Arquivo $ {
                    file.name
                }
                enviado com sucesso !`);
        }

        else {
            alert("Selecione um arquivo XML primeiro.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Cadastro manual realizado com sucesso!");
    };

    return (<div className="cadastro-container-materia" >

        {/* Lado esquerdo */}
        <div className="form-side-materia" >

            { /* Upload XML */}
            <div className="upload-section-materia">
                <h2>Upload de Nota Fiscal</h2>
                <p> Faça upload do XML da nota fiscal para extrair automaticamente as matérias-primas. </p>
                <form onSubmit={handleUpload}> <input type="file" accept=".xml" onChange={handleFileChange} className="materia" />
                    <button type="submit" className="upload-btn-materia" > Fazer Upload </button> 
                </form>
            </div>

            {/* Cadastro manual */}

            {/* <div className="form-container">
                <h2>Cadastro de Produto</h2>
                

                    <label htmlFor="nome">Nome do Produto:</label>
                    <input type="text" id="nome" placeholder="Nome" className="produto" />

                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" placeholder="Ex: 00345" className="codigo" />

                    <label htmlFor="preco">Preço Unitário (R$):</label>
                    <input type="text" id="preco" placeholder="Ex: $0,50" className="preco" />

                    <label htmlFor="usuario">Usuário Responsável:</label>
                    <input type="text" id="usuario" placeholder="00000" className="usuario" />

                    
                        <div className="row" >
                            <div>
                                <label>Matéria-Prima:</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Cobre"
                                    className="materia-prima"
                                />
                            </div>

                            <div>
                                <label>Unidade:</label>
                                <select className="unidade-medida">
                                    <option>Selecione</option>
                                    <option>Kg</option>
                                    <option>Litros</option>
                                    <option>Metros</option>
                                    <option>Unidade</option>
                                    <option>Centímetros</option>
                                </select>
                            </div>

                            <div>
                                <label>Quantidade:</label>
                                <input
                                    type="text"
                                    placeholder="Ex: x5"
                                    className="quantidade"
                                />
                            </div> */}
            <div className="manual-section-materia" >
                <h2>Cadastro Manual</h2>
                <form onSubmit={handleSubmit}>

                    {/* <label htmlFor="nome">Nome do Produto:</label>
                    <input type="text" id="nome" placeholder="Nome" className="produto" />

                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" placeholder="Ex: 00345" className="codigo" />

                    <label htmlFor="preco">Preço Unitário (R$):</label>
                    <input type="text" id="preco" placeholder="Ex: $0,50" className="preco" />

                    <label htmlFor="usuario">Usuário Responsável:</label>
                    <input type="text" id="usuario" placeholder="00000" className="usuario" /> */}

                    {/* <div>
                                <label>Matéria-Prima:</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Cobre"
                                    className="materia-prima"
                                />
                            </div>

                            <div>
                                <label>Unidade:</label>
                                <select className="unidade-medida">
                                    <option>Selecione</option>
                                    <option>Kg</option>
                                    <option>Litros</option>
                                    <option>Metros</option>
                                    <option>Unidade</option>
                                    <option>Centímetros</option>
                                </select>
                            </div>

                            <div>
                                <label>Quantidade:</label>
                                <input
                                    type="text"
                                    placeholder="Ex: x5"
                                    className="quantidade"
                                />
                            </div> */}

                    <div className="row-materia">
                        <div>
                            <label>Matéria-Prima:</label>
                            <input type="text" placeholder="Ex: Cobre" className="materia-prima" />
                        </div>

                        <div>
                            <label>Unidade:</label>
                            <select className="unidade-medida">
                                <option>Selecione</option>
                                <option>Kg</option>
                                <option>Litros</option>
                                <option>Metros</option>
                                <option>Unidade</option>
                                <option>Centímetros</option>
                            </select>
                        </div>

                        <div>
                            <label>Quantidade:</label>
                            <input type="text" placeholder="Ex: x5" className="quantidade" />
                        </div>

                        {/* <button type="button" className="add-btn">
                            +
                        </button> */}
                    </div>

                    <div className="row2-materia">
                        <div>
                            <label>Preço</label>
                            <input type="text" placeholder=" Ex: R$50,00" className="materia-prima" />
                        </div>

                        <div>
                            <label>Nome do Fornecedor</label>
                            <input type="text" placeholder="Insira o nome do fornecedor" className="materia-prima" />
                        </div>

                        <div>
                            <label>Data de Emissão</label>
                            <input type="date" className="materia-prima2"/>
                        </div>
                    </div>
                    {/* <label htmlFor="nome">Matéria Prima</label>
                    <div className="row-materia" > <input type="text" placeholder="Ex: Cobre" className="input-small" />
    
                        <select className="input-small" >
                            <option>Selecione</option> <option>Kg</option> <option>g</option> <option>Unidade</option> </select>

                        
                        <input type="text" placeholder="Ex: x5" className="input-small" />
                    </div> */}

                    {/* <label htmlFor="nome">Preço</label>
                    <input type="text" placeholder="Ex: R$50,00" /> */}

                    <div className="salvar">
                    <label htmlFor="nome">Valor Total</label>
                    <input type="text" placeholder="Insira o valor total considerando o preço unitário e a quantidade" />
                    <button type="submit" className="salvar-materia" > Salvar </button>
                    </div>
                </form>
            </div>
        </div>

        {/* Lado direito */}
        <div className="info-side-materia">
            <p> Faça upload do arquivo xml ou preencha os campos para cadastrar as matérias-primas manualmente.</p>
            <img src={materia} alt="Evolução de Custos" className="materia-img" />
        </div>
    </div>);
};

export default CadastroMateriaPrima;