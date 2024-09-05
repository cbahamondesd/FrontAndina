import React from 'react';
import Header from './pages/header';
import Hero from './pages/hero';
import Propositos from './pages/propositos';
import Transicion from './pages/transicion';
import NuestroProposito from './pages/nuestroProposito';
import ViveProposito from './pages/viveProposito';
import Rutas from './pages/rutas';
import PropositoEnRuta from './pages/propositoEnRuta';
import Clientes from './pages/clientes'
import Footer from './pages/footer';

function App() {

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header/>
      <Hero/>
      <Propositos/>
      <Transicion />
      <NuestroProposito />
      <ViveProposito />
      <Rutas />
      <PropositoEnRuta />
      <Clientes />
      <Footer />
    </div>
  )
}

export default App
