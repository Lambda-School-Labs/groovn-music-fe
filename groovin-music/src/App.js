import React from 'react';
import Navbar from '../components/navbar.js';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage/landingPage.js';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage}></Route>
    </div>
  );
}

export default App;
