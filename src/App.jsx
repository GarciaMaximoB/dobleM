import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Servicios from './pages/Services';
import Lideres from './pages/Lideres';
import Contacto from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <Routes>
      <Route exact path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/servicios' Component={Servicios} />
        <Route path='/lideres' Component={Lideres} />
        <Route path='/contacto' Component={Contacto} />
      </Routes>
      </div>
      
    </Router>
  )
}

export default App
