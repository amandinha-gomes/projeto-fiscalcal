
// import Menu from "../components/menu";

const HistoricoNotasContent = () => {
    return (
        <div className="historico-wrapper">
            <h2>Histórico de Notas Fiscais</h2>
            <div className="filter">
                <input type="text" placeholder="Pesquisar por número..." />
                <select>
                    <option>Status</option>
                    <option>Pago</option>
                    <option>Pendente</option>
                    <option>Atrasado</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NF-001</td>
                        <td>05/08/2025</td>
                        <td>R$ 1.250,00</td>
                        <td><span className="status pago">Pago</span></td>
                    </tr>
                    <tr>
                        <td>NF-002</td>
                        <td>02/08/2025</td>
                        <td>R$ 980,00</td>
                        <td><span className="status pendente">Pendente</span></td>
                    </tr>
                    <tr>
                        <td>NF-003</td>
                        <td>25/07/2025</td>
                        <td>R$ 2.450,00</td>
                        <td><span className="status atrasado">Atrasado</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const HistoricoNotas = () => {
    // return (
    //     <Menu>
    //         <HistoricoNotasContent />
    //     </Menu>
    // );
};

export default HistoricoNotas;
