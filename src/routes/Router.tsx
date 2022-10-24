import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Home from "../pages/home/Home";


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          {" "}
        </Route>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<h1>Página nao encontrada.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
