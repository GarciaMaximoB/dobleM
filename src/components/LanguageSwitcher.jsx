import React, { useState } from "react";
import i18n from 'i18next';

function LanguageSwitcher() {

    const [idioma, setIdioma] = useState('es')

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      setIdioma(language)  
      
    };
  
    return (
      <div>
        <button onClick={() => changeLanguage('es')} className={`button-language ${idioma == 'es' ? 'activo' : ''}`}>ES</button>
        <span> / </span>
        <button onClick={() => changeLanguage('en')} className={`button-language ${idioma == 'en' ? 'activo' : ''}`}>EN</button>
      </div>
    );
  }

  export default LanguageSwitcher;