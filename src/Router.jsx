// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/home';


// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar todas as páginas
import Dashboard from "./pages/dashboard";
import Perfil from "./pages/perfil";
import CadastroProduto from "./pages/cadastroproduto";
import CadastroMateria from "./pages/cadastromateria";
import CadastroUser from "./pages/cadastrouser";
import HistoricoNotas from "./pages/historiconotas";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/cadastroproduto" element={<CadastroProduto />} />
                <Route path="/cadastromateria" element={<CadastroMateria />} />
                <Route path="/cadastrouser" element={<CadastroUser />} />
                <Route path="/historico" element={<HistoricoNotas />} />

                {/* Rota padrão, redireciona para dashboard */}
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
