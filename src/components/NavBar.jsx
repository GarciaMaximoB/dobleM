import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function NavBar() {
    return (
        <nav className="navBar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/home">Agencia</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/home">Cultura</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/servicios">Servicios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/servicios">Clientes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/lideres">Líderes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;