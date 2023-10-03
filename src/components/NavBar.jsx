import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { useTranslation } from "react-i18next";

function NavBar() {
    const { t } = useTranslation();
    return (
        <nav className="navBar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/home">{t('nav-agencia')}</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/home">{t('nav-cultura')}</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/servicios">{t('nav-servicios')}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/servicios">{t('nav-clientes')}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/lideres">{t('nav-lideres')}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto">{t('nav-contacto')}</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;