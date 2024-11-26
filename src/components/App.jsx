import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';

import '../styles/index.scss';

function App() {

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
