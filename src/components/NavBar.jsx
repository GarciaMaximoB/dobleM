import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { useTranslation } from "react-i18next";
import bars from "../assets/bars-solid.svg"

function NavBar() {


    const toggleNavBar = () => {
        const navList = document.getElementById('nav-list');
        const content = document.querySelector('.content');
        const footer = document.querySelector('.footer')
        navList.classList.toggle('active');
        content.classList.toggle('active');
        footer.classList.toggle('active');
    }

    const removeNav = () => {
        const navList = document.getElementById('nav-list');
        const content = document.querySelector('.content');
        const footer = document.querySelector('.footer')
        navList.classList.remove('active');
        content.classList.remove('active');
        footer.classList.remove('active');
    }



    const { t } = useTranslation();
    return (
        <nav className="navBar">
            <ul className="nav-list" id="nav-list">
                <li className="nav-item">
                    <a href="/home/#agency" onClick={removeNav}>{t('nav-agencia')}</a>
                </li>
                <li className="nav-item">
                    <a href="/home/#culture" onClick={removeNav}>{t('nav-cultura')}</a>
                </li>
                <li className="nav-item">
                    <a href="/servicios/#services" onClick={removeNav}>{t('nav-servicios')}</a>
                </li>
                <li className="nav-item">
                    <a href="/servicios/#clients" onClick={removeNav}>{t('nav-clientes')}</a>
                </li>
                <li className="nav-item" >
                    <a href="/lideres/#leaders" onClick={removeNav}>{t('nav-lideres')}</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" onClick={removeNav}>{t('nav-contacto')}</a>
                </li>
            </ul>
            <img src={bars} alt="" id="navbarMenuIcon" onClick={toggleNavBar} />
        </nav>
    )
}

export default NavBar;