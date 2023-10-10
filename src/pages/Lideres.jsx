import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import imagenTrago from '../assets/trago.jpg'
import { Link } from 'react-router-dom';
import  i18n  from 'i18next';

function Lideres() {

      useEffect(() => {
        // Recupera el idioma almacenado en el localStorage
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    },[]);

    const { t } = useTranslation();

    return (
        <div className='content'>
            <div className='lideres-section'  id="leaders">
                <div className='lideres-container'>
                    <h1 className='heading-sections'>
                        {t('welcome-title')}
                    </h1>
                    <p>
                        {t('welcome-paragraph')}
                    </p>
                </div>
            </div>

            <div className='team-section'>
                <div className='team-container'>
                    <div className='column-1'>
                        <h1 className='heading-sections'>
                            {t('team-title')}
                        </h1>
                        <p className='team-p'>
                            {t('team-paragraph')}
                        </p>
                        <h4 className='heading-sections lideres-title'>
                            {t('lideres')}
                        </h4>
                        <p className='lideres-p'><i>Melanie Iglesias - Micaela Seggio</i></p>
                        <Link to="/contact">
                        {t('lideres-btn')}
                        </Link>
                       
                    </div>
                    <div className='column-2'>
                        <img src={imagenTrago} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lideres;