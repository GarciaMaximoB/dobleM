import React, { useState } from "react";
import i18n from 'i18next';

function LanguageSwitcher() {

    const [idioma, setIdioma] = useState('es')
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      setIdioma(language)  
      sessionStorage.setItem('language', language);
    };

    const lenguaje = localStorage.getItem('language')

    
  
    return (
      <div>
        <button onClick={() => changeLanguage('es')} className={`button-language ${lenguaje == 'es' || null ? 'activo' : ''}`}>ES</button>
        <span> / </span>
        <button onClick={() => changeLanguage('en')} className={`button-language ${lenguaje == 'en' ? 'activo' : ''}`}>EN</button>
      </div>
    );
  }

  export default LanguageSwitcher;