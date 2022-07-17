import React,{useContext} from 'react'
import Logo from "../../images/Logo.PNG";
import { Link } from 'react-router-dom';
import {DataContext} from "../../context/Dataprovider";
import Categoria1 from '../Categorias/Categoria1';
import Categoria2 from '../Categorias/Categoria2';
import Categoria3 from '../Categorias/Categoria3';
import { Route } from 'react-router-dom';
import Navbar from '../Navegacion/Navbar';

export const Header = () => {
  const value=useContext(DataContext)
  const [menu,setMenu]=value.menu
  const [carrito]=value.carrito

  const toogleMenu=()=>{
    setMenu(!menu)
  }
  return (
        <header>

          <Link to="/productos">
            <div className="logo">
              <img src={Logo} alt="logo" width="150"/>
              <Link to='/productos'>
              <h1>Litle shop</h1>
              </Link>

            </div>
          </Link>
          <ul>
            
            <li>
              <Link to='/productos'>Todos los Productos</Link>
            </li>
          </ul>
          <div className='cart' onClick={toogleMenu}>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>{carrito.length}</span>
          </div>

          <body>

          </body>


        </header>

  )
}
