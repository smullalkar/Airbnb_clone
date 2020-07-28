import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
import Routes from "./Components/Common/Route/Routes"
import ReviewHouseRules from './Components/Common/Billing/ReviewHouseRules';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
