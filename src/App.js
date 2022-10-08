import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Componentes/Home/Home";
import ModaMasculina from "./Componentes/ModaMasculina/ModaMasculina";
import ModaFeminina from "./Componentes/ModaFeminina/ModaFeminina";
import ModaInfantil from "./Componentes/ModaInfantil/ModaInfantil";
import Sobre from "./Componentes/Sobre/Sobre";
import Menu from "./Componentes/Menu/Menu";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/ModaMasculina"  element={<ModaMasculina/>} />
          <Route path="/ModaFeminina" element={<ModaFeminina/>} />
          <Route path="/ModaInfantil" element={<ModaInfantil/>} />
          <Route path="/Sobre" element={<Sobre/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;