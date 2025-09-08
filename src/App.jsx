// // import Router from '../src/Router'
// // import './App.css'


// // function App() {
// //   return <Router />;
// // }

// // export default App

// import './css/style.css';

// function App() {
//   return <h1>Olá FiscalCalc 🚀</h1>;
// }

// export default App;

// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Menu from "./components/menu";

// function App() {
//   return (
//     <div>
//       <h1>FiscalCalc 🚀</h1>
//       <Menu />
//     </div>
//   );
// }

// import CadastroMateria from "./pages/cadastromateria";

// function App() {
//   return (
//     <div>
//       <CadastroMateria />
//     </div>
//   );
// }

// import CadastroProduto from "./pages/cadastroproduto";

// function App() {
//   return (
//     <div>
//       <CadastroProduto />
//     </div>
//   );
// }

// import CadastroUser from "./pages/cadastrouser";

// function App() {
//   return (
//     <div>
//       <CadastroUser />
//     </div>
//   );
// }

// import Notas from "./pages/historiconotas";

// function App() {
//   return (
//     <div>
//       <Notas />
//     </div>
//   );
// }

// import Dashboard from "./pages/dashboard";

// function App() {
//   return (
//     <div>
//       <Dashboard />
//     </div>
//   );
// }

// import Perfil from "./pages/perfil";

// function App() {
//   return (
//     <div>
//       <Perfil />
//     </div>
//   );
// }

// export default App;

import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Importar páginas
// import Menu from "./components/menuenu";
// import CadastroMateria from "./pages/cadastromateria";
// import CadastroProduto from "./pages/cadastroproduto";
// import CadastroUser from "./pages/cadastrouser";
// import Notas from "./pages/historiconotas";
// import Dashboard from "./pages/dashboard";
// import Perfil from "./pages/perfil";

// function App() {
//   return (
//     <Router>
//       <Menu>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/cadastromateria" element={<CadastroMateria />} />
//           <Route path="/cadastroproduto" element={<CadastroProduto />} />
//           <Route path="/cadastrouser" element={<CadastroUser />} />
//           <Route path="/historico" element={<Notas />} />
//           <Route path="/perfil" element={<Perfil />} />
//           {/* Rota padrão */}
//           <Route path="*" element={<Dashboard />} />
//         </Routes>
//       </Menu>
//     </Router>
//   );
// }

// export default App;

import Router from "./Router";

function App() {
  return <Router />;
}

export default App;
