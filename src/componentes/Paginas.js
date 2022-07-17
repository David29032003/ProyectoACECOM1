import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Inicio } from './inicio';
import {ProductosLista} from "./Productos/index.js";
import Categoria1 from './Categorias/Categoria1';
import Categoria2 from './Categorias/Categoria2';
import Categoria3 from './Categorias/Categoria3';
import Categoria4 from './Categorias/Categoria4';

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path='/' exact component={Inicio}/>
        <Route path='/productos' exact component={ProductosLista}/>
        <Route path='/Categoria1' component={Categoria1}/>
        <Route path='/Categoria2' component={Categoria2}/>
        <Route path='/Categoria3' component={Categoria3}/>
        <Route path='/Categoria4' component={Categoria4}/>
        

      </Switch>
    </section>
  )
}
