import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
import Home from './Components/Common/Home/Home'
import Footer from './Components/Common/Footer/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
