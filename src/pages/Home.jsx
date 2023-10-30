import React, { useEffect } from 'react';
import logo from "../assets/logo.png"
import imagenAgencia from "../assets/CamaraBN.png"
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import lideresFoto from "../assets/owners_photo.jpg"
import { Link } from 'react-router-dom';

function Home() {
    const { t } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            console.log(savedLanguage)
        }
    }, []);

    return (
        < div className='content'>
            <div className='main-section' >
                <div className='logo-container'>
                    <img src={logo} alt="Logo Doble M Agency" />
                    <LanguageSwitcher />
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

            <div className='leaders-section' id="leaders">
                <div className='leaders-container'>
                    <h1 className='heading-sections'>{t('cultura-title')}</h1>
                    <div className='columns'>
                        <img src={lideresFoto} alt="Micaela Seggio & Melanie Iglesias" className='lideres-foto'/>
                        <div className='spans-lideres'>
                        <span>
                            {t('lideres-t1')}
                        </span>
                        <span>
                            {t('lideres-t2')}
                        </span>
                        <span>
                            {t('lideres-t3')}
                        </span>
                        <Link to='/contact' className='lideres-button'>
                            {t('lideres-btn')}
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;