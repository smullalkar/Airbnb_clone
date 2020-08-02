import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-override.css'
import NavBar from './Components/Common/NavBar/NavBar'
// import Footer from './Components/Common/Footer/Footer'
import Routes from "./Components/Common/Route/Routes"
import AddPhoneNumber from "./Components/Common/AddPhoneNumber/AddPhoneNumber"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <AddPhoneNumber />
    </div>
  );
}

export default App;
