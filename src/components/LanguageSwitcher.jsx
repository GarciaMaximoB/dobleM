import React, { useState } from "react";
import i18n from 'i18next';

function LanguageSwitcher() {
    const [idioma, setIdioma] = useState('es')

    const idiomaGuardado = localStorage.getItem('language')

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      setIdioma(language)  
      localStorage.setItem('language', language);
    };

    return (
      <div>
        <button onClick={() => changeLanguage('es')} className={`button-language ${idiomaGuardado == 'es' || null ? 'activo' : ''}`}>ES</button>
        <span> / </span>
        <button onClick={() => changeLanguage('en')} className={`button-language ${idiomaGuardado == 'en' ? 'activo' : ''}`}>EN</button>
      </div>
    );
  }

  export default LanguageSwitcher;