import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import './App.css'
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Servicios from './pages/Services';
import Lideres from './pages/Lideres';
import Contacto from './pages/Contact';
import translationsEN from './locales/en.json';
import translationsES from './locales/es.json';

i18n.init({
  resources: {
    en: {
      translation: translationsEN,
    },
    es: {
      translation: translationsES,
    },
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false,
  },
});



function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/servicios' Component={Servicios} />
          <Route path='/lideres' Component={Lideres} />
          <Route path='/contacto' Component={Contacto} />
        </Routes>
      </div>
    </Router>
    </I18nextProvider>
  )
}

export default App
