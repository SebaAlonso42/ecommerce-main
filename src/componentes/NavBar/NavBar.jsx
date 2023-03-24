import React, { useState } from "react";
import VIÑEDOS from "../../imagenes/VIÑEDOS.png";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {  pink } from '@mui/material/colors';


 const NavBar =()=>{

    const [menu, setMenu]=useState(false)

    const toggleMenu=()=>{
      setMenu(!menu)
    }

    return(
        <header>
          <NavLink to='/' >
            <div className="logo">
                <img src={VIÑEDOS} className="logo-logo" width="150"/>
            
            </div>
            <button onClick={toggleMenu} className="Cabecera-button">
              <MenuIcon fontSize="large" sx={{ color: pink[500] }}/>
              </button>
          </NavLink> 
          <nav className={ `Cabecera-nav ${menu ? 'isActive' : "" }`}>
            <ul className="Cabecera-ul">
              <li className="Cabecera-li">
                <NavLink to='/' onClick={toggleMenu} >Catalogo</NavLink>
              </li>
              <li className="Cabecera-li">
                <NavLink to='/categoria/Syrah' onClick={toggleMenu}  >Syrah</NavLink>
              </li>
              <li className="Cabecera-li">
                <NavLink to='/categoria/Malbec' onClick={toggleMenu} >Malbec</NavLink>
              </li>
              <li className="Cabecera-li">
                <NavLink to='/categoria/Pinot Noir' onClick={toggleMenu}>Pinot Noir</NavLink>
              </li>
              <li className="Cabecera-li">
                <NavLink to='/categoria/Bonarda' onClick={toggleMenu}>Bonarda</NavLink>
              </li>
              <li className="Cabecera-li">
                <NavLink  to='cart' onClick={toggleMenu}>
                  <CartWidget className="cart"  />
                  </NavLink>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default NavBar;