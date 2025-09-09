// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";

import "../css/dashboard.css";
import grafico from "../img/grafico.svg"; 

// const Dashboard = () => {
//     const [mostrarProdutos, setMostrarProdutos] = useState(false);
//     const [mostrarMaterias, setMostrarMaterias] = useState(false);
//     const [itemSelecionado, setItemSelecionado] = useState(null);

// Produtos
// const produtos = [
//     { id: "MCM010", nome: "000604", preco: 55.00, estoque: 12 },
//     { id: "MCM015", nome: "002570", preco: 80.00, estoque: 8 },
//     { id: "MCM020", nome: "000120", preco: 110.00, estoque: 20 },
//     { id: "MCM020", nome: "000120", preco: 240.00, estoque: 20 },
//     { id: "MCM020", nome: "000120", preco: 40.00, estoque: 20 }
// ];

// Matérias
// const materias = [
//     { materia: "Tinta", codigo: "000604", custo: 85.00, fornecedor: "Marquinhos", data: "16/07/2025" },
//     { materia: "Aço", codigo: "000604", custo: 85.00, fornecedor: "Luquinhas", data: "09/08/2025" },
//     { materia: "Cobre", codigo: "000604", custo: 85.00, fornecedor: "Aninha", data: "23/04/2024" },
//     { materia: "Ferro", codigo: "000604", custo: 85.00, fornecedor: "Leticinha", data: "31/07/2024" },
// ];

// return (
//     <div className="dashboard-wrapper">
{/* SIDEBAR */ }
{/* <aside className="sidebar">
                <button className="menu-btn">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className="menu">
                    <li><a href="#" className="active">Dashboard</a></li>
                    <li><a href="#">Cadastrar Matéria-Prima</a></li>
                    <li><a href="#">Cadastrar Produto</a></li>
                    <li><a href="#">Cadastrar Usuários</a></li>
                    <li><a href="#">Histórico</a></li>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#">Sair</a></li>
                </ul>
            </aside> */}

{/* CONTEÚDO PRINCIPAL */ }
{/* <main className="main-content">
                <header className="main-header">
                    <h1>Bem-vindo ao <span className="logo">FiscalCalc</span></h1>
                    <p>Dashboard de Custos e Estoque</p>
                </header> */}

{/* GRÁFICO */ }
{/* <section className="chart-section">
                    <img 
                        src={grafico}
                        alt="Evolução de Custos" 
                        className="chart-img"
                    />
                </section> */}

{/* CARDS */ }
{/* <section className="cards1">
                    <div className="card">
                        <h2>Cadastrados</h2>
                        <p className="valor">7</p>
                    </div>

                    <div className="card">
                        <h2>Custo Total</h2>
                        <p className="valor">R$10500,00</p>
                        <small>Uma unidade por produto</small>
                    </div>

                    <div className="card2">
                        <h2>Menor Custo</h2>
                        <p className="valor2">MCM010</p>
                        <small>R$ 55,00</small>
                    </div>

                    <div className="card2">
                        <h2>Maior Custo</h2>
                        <p className="valor2">MCM037</p>
                        <small>R$ 110,00</small>
                    </div>
                </section> */}

{/* BOTÕES */ }
{/* <div className="actions">
                    <button onClick={() => {
                        setMostrarProdutos(!mostrarProdutos);
                        setMostrarMaterias(false);
                    }}>
                        Produtos Cadastrados
                    </button>
                    <button onClick={() => {
                        setMostrarMaterias(!mostrarMaterias);
                        setMostrarProdutos(false);
                    }}>
                        Matérias Cadastradas
                    </button>
                </div> */}

{/* LISTAGEM DE PRODUTOS */ }
{/* {mostrarProdutos && (
                    <section className="produtos-section">
                        <table className="produtos-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Código</th>
                                    <th>Preço (R$)</th>
                                    <th>Estoque</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((p) => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.nome}</td>
                                        <td>{p.preco.toFixed(2)}</td>
                                        <td>{p.estoque}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )} */}


{/* LISTAGEM DE MATÉRIAS-PRIMAS */ }
{/* {mostrarMaterias && (
                    <section className="produtos-section">
                        <table className="produtos-table">
                            <thead>
                                <tr>
                                    <th>Matéria</th>
                                    <th>Código</th>
                                    <th>Valor Custo (R$)</th>
                                    <th>Fornecedor</th>
                                    <th>Data de compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materias.map((m, index) => (
                                    <tr key={index}>
                                        <td>{m.materia}</td>
                                        <td>{m.codigo}</td>
                                        <td>{m.custo.toFixed(2)}</td>
                                        <td>{m.fornecedor}</td>
                                        <td>{m.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )} */}

{/* MODAL */ }
{/* {itemSelecionado && (
                    <div className="modal-overlay" onClick={() => setItemSelecionado(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2>Detalhes</h2>
                            <pre>{JSON.stringify(itemSelecionado, null, 2)}</pre>
                            <button className="close-btn" onClick={() => setItemSelecionado(null)}>
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard; */}

const Dashboard = () => {
    const [mostrarProdutos, setMostrarProdutos] = useState(false);
    const [mostrarMaterias, setMostrarMaterias] = useState(false);

    // controle do modal
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [itemTipo, setItemTipo] = useState(null); // 'produto' ou 'materia'

    // produtos (cada item tem id único)
    const produtos = [
        {
            // id: "1",
            nome: "MCM037",
            codigo: "000604",
            preco: 85.0,
            estoque: 12,
            ultimaAtualizacao: "16/07/2025",
            materiaPrima: "Tinta",
            quantidade: "2 Latas (10l)",
            fornecedor: "Marquinhos"
        },
        {
            id: "2",
            nome: "MCM010",
            codigo: "000605",
            preco: 55.0,
            estoque: 8,
            ultimaAtualizacao: "09/08/2025",
            materiaPrima: "Aço",
            quantidade: "5 Barras",
            fornecedor: "Luquinhas"
        },
        {
            id: "3",
            nome: "MCM033E-C",
            codigo: "000606",
            preco: 110.0,
            estoque: 20,
            ultimaAtualizacao: "23/04/2024",
            materiaPrima: "Cobre",
            quantidade: "3 Kg",
            fornecedor: "Aninha"
        }
    ];

    // matérias-primas
    const materias = [
        { materia: "Tinta", codigo: "000604", custo: 85.0, fornecedor: "Marquinhos", data: "16/07/2025" },
        { materia: "Aço", codigo: "000605", custo: 120.0, fornecedor: "Luquinhas", data: "09/08/2025" },
        { materia: "Cobre", codigo: "000606", custo: 95.0, fornecedor: "Aninha", data: "23/04/2024" }
    ];

    const abrirModal = (item, tipo) => {
        console.log("abrirModal:", tipo, item);
        setItemSelecionado(item);
        setItemTipo(tipo);
    };

    const fecharModal = () => {
        setItemSelecionado(null);
        setItemTipo(null);
    };

    // fechar modal com ESC
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") fecharModal();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <div className="dashboard-wrapper">
            <main className="main-contentdash">
                <header className="main-header">
                    <h1>Bem-vindo ao <span className="logo">FiscalCalc</span></h1>
                    <p>Dashboard de Custos e Estoque</p>
                </header>

                {/* GRÁFICO */}
                <section className="chart-section">
                    <img src={grafico} alt="Evolução de Custos" className="chart-img" />
                </section>

                {/* CARDS */}
                <section className="cards1">
                    <div className="card">
                        <h2>Cadastrados</h2>
                        <p className="valor">7</p>
                    </div>

                    <div className="card">
                        <h2>Custo Total</h2>
                        <p className="valor">R$ 10.500,00</p>
                        <small>Uma unidade por produto</small>
                    </div>

                    <div className="card2">
                        <h2>Menor Custo</h2>
                        <p className="valor2">MCM010</p>
                        <small>R$ 55,00</small>
                    </div>

                    <div className="card2">
                        <h2>Maior Custo</h2>
                        <p className="valor2">MCM037</p>
                        <small>R$ 110,00</small>
                    </div>
                </section>

                {/* BOTÕES */}
                <div className="actions">
                    <button onClick={() => { setMostrarProdutos(!mostrarProdutos); setMostrarMaterias(false); }}>
                        Produtos Cadastrados
                    </button>
                    <button onClick={() => { setMostrarMaterias(!mostrarMaterias); setMostrarProdutos(false); }}>
                        Matérias Cadastradas
                    </button>
                </div>

                {/* LISTAGEM DE PRODUTOS */}
                {mostrarProdutos && (
                    <section className="produtos-section">
                        <table className="produtos-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Código</th>
                                    <th>Preço (R$)</th>
                                    <th>Estoque</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((p) => (
                                    <tr key={p.id} onClick={() => abrirModal(p, "produto")} className="linha-click">
                                        <td>{p.nome}</td>
                                        <td>{p.codigo}</td>
                                        <td>{p.preco.toFixed(2)}</td>
                                        <td>{p.estoque}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}

                {/* LISTAGEM DE MATÉRIAS-PRIMAS */}
                {mostrarMaterias && (
                    <section className="produtos-section">
                        <table className="produtos-table">
                            <thead>
                                <tr>
                                    <th>Matéria</th>
                                    <th>Código</th>
                                    <th>Valor Custo (R$)</th>
                                    <th>Fornecedor</th>
                                    <th>Data de compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materias.map((m, index) => (
                                    <tr key={index} onClick={() => abrirModal(m, "materia")} className="linha-click">
                                        <td>{m.materia}</td>
                                        <td>{m.codigo}</td>
                                        <td>{m.custo.toFixed(2)}</td>
                                        <td>{m.fornecedor}</td>
                                        <td>{m.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                )}

                {/* MODAL */}
                {itemSelecionado && (
                    <div className="modal-overlay" onClick={fecharModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>Detalhes</h3>

                            {/* conteúdo do modal varia conforme o tipo */}
                            {itemTipo === "produto" && (
                                <div className="modal-body">
                                    {/* <p><strong>Produto:</strong> {itemSelecionado.nome}</p>
                                    <p><strong>Código:</strong> {itemSelecionado.codigo}</p> */}
                                    <p><strong>Matéria-Prima:</strong> {itemSelecionado.materiaPrima || "-"}</p>
                                    <p><strong>Quantidade:</strong> {itemSelecionado.quantidade || "-"}</p>
                                    <p><strong>Preço (R$):</strong> {Number(itemSelecionado.preco).toFixed(2)}</p>
                                    <p><strong>Fornecedor:</strong> {itemSelecionado.fornecedor || "-"}</p>
                                    <p><strong>Última Atualização:</strong> {itemSelecionado.ultimaAtualizacao || "-"}</p>
                                </div>
                            )}

                            {/* {itemTipo === "materia" && (
                                <div className="modal-body">
                                    <p><strong>Matéria-Prima:</strong> {itemSelecionado.materia}</p>
                                    <p><strong>Código:</strong> {itemSelecionado.codigo}</p>
                                    <p><strong>Preço (R$):</strong> {Number(itemSelecionado.custo).toFixed(2)}</p>
                                    <p><strong>Fornecedor:</strong> {itemSelecionado.fornecedor}</p>
                                    <p><strong>Data de compra:</strong> {itemSelecionado.data}</p>
                                </div>
                            )} */}

                            <button className="close-btn" onClick={fecharModal}>Fechar</button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
