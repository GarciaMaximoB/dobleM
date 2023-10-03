import React from 'react';
import logo from "../assets/logo.png"
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';


function Home() {

    const { t } = useTranslation();

    return (
        <>
            <div className='main-section'>
                <div className='logo-container'>
                    <img src={logo} alt="Logo Doble M Agency" />
                    <LanguageSwitcher/>
                </div>
            </div>

            <div className='agency-section'>
                <div className='agency-container'>
                    <h1 className='heading-sections'>{t('agencia-title')}</h1>
                </div>
            </div>
        </>
    )
}

export default Home;