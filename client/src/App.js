import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
// import Footer from './Components/Common/Footer/Footer'
import Routes from "./Components/Common/Route/Routes"
import PaymentSuccessful from "./Components/Common/Billing/PaymentSuccessful"




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <PaymentSuccessful />

    </div>
  );
}

export default App;
