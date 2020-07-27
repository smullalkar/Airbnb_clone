import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
import Footer from './Components/Common/Footer/Footer'
import Routes from "./Components/Common/Route/Routes"
import Entity from "./Components/Common/Entity/Entity"
import ListingNavBar from "../src/Components/Common/ListingNavBar/ListingNavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes />
      <Entity /> */}
      <ListingNavBar />

    </div>
  );
}

export default App;
