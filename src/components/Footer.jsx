import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function footer() {
    const { t } = useTranslation();
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            console.log(savedLanguage)
        }
    }, []);
    return (
        <div className="footer">
            <p className="text-footer"> {t('footer-text')} <a href="https://maximogarciadev.com/">Maximo B. Garcia</a> </p>
        </div>
    )
}