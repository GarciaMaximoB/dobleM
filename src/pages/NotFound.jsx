import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import  i18n from "i18next";

function NotFound() {

    useEffect(() => {
        // Recupera el idioma almacenado en el localStorage
        const savedLanguage = sessionStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const { t } = useTranslation()
    return (
        <div className="content">
            <div className="not-found-container">
                <h1 className="heading-sections">{t('not-found-t')}</h1>
                <p className="p-notfound">{t('not-found-p')}</p>
                <a href="/"className="b-notfound">{t('not-found-b')}</a>
            </div>

        </div>
    )
}

export default NotFound