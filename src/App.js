import React from "react";
import {Header} from "./componentes/Header";
import 'boxicons';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import {DataProvider} from "./context/Dataprovider";
import Navbar from "./componentes/Navegacion/Navbar";
import Categoria1 from "./componentes/Categorias/Categoria1";
import Categoria2 from "./componentes/Categorias/Categoria2";
import Categoria3 from "./componentes/Categorias/Categoria3";
import Categoria4 from "./componentes/Categorias/Categoria4";

function App() {
  return (
    
    <DataProvider>
    <div className="App">
      <Router>
        <Navbar></Navbar>
      <Header/>

      <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
