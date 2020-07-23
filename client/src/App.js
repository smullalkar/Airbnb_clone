import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './bootstrap-override.css'
// import Footer from './Components/Common/Footer';


import NavBar from "./Components/Common/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
