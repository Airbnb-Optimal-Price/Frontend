import React from 'react';
import Navbar from './Components/NavBar';
import Landing from './Components/LandingPage';
import DashBoard from './Components/DashBoard';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <DashBoard/>
      <Landing />
    </div>
  );
}

export default App;
