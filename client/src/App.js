import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
import Home from './Components/Common/Home/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
