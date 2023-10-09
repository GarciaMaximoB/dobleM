import React from 'react';
import logo from "../assets/logo.png"
import imagenAgencia from"../assets/CamaraBN.png"
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';


function Home() {

    const { t } = useTranslation();

    return (
        < div className='content'>
            <div className='main-section' >
                <div className='logo-container'>
                    <img src={logo} alt="Logo Doble M Agency" />
                    <LanguageSwitcher/>
                </div>
            </div>

            <div className='agency-section' id="agency">
                <div className='agency-container' >
                    <h1 className='heading-sections'>{t('agencia-title')}</h1>
                    <div className='div-block'>
                        <p className='paragraph'>{t('agencia-text')}</p>
                        <img src={imagenAgencia} alt="Imagen de un celular blanco y negro" />
                    </div>
                </div>
            </div>

            <div className='culture-section' id="culture">
                <div className='culture-container'>
                    <h1 className='heading-sections'>{t('cultura-title')}</h1>
                    <div className='columns'>
                    <span>
                        {t('cultura-t1')}
                   </span>
                   <span>
                        {t('cultura-t2')}
                   </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;