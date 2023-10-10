import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import igIcon from '../assets/ig-icon.svg'
import mailIcon from '../assets/mail-icon.svg'
import phoneIcon from '../assets/phone-icon.svg'
import i18n from 'i18next';

function Contact() {

    const { t } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            console.log(savedLanguage)
        }
    }, []);
    return (
        <div className='content'>
            <div className='section-contact'>
                <div className='contact-container'>
                    <div className='column1-contact'>
                        <h1 className='heading-sections'>{t('contact-title')}</h1>
                        <p>{t('contact-paragraph')}</p>
                        <br />
                        <p>{t('contact-paragraph2')}</p>
                        <br />
                        <b>{t('contact-bold')}</b>
                    </div>
                    <div className='column2-contact'>
                        <ul>
                            <li>
                                <img src={igIcon} alt="instagram-doble-M-Agency" />
                                <a href="https://www.instagram.com/doblem.agency/"><i>@doblem.agency</i></a>
                            </li>
                            <li>
                                <img src={mailIcon} alt="correo-doble-M-Agency" />
                                <a href="mailto:info.doblemagency@gmail.com"><i>info.doblemagency@gmail.com</i></a>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="telefono-doble-M-Agency" />
                                <a href="tel:+5491173649850"><i>+54 9 11 7364-9850</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;