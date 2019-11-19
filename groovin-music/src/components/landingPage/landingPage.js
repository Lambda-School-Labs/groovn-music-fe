import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration.js';
import './landingPage.css';
import NavBar from '../NavBar/navbar.js';

function LandingPage() {
  return (
    <>
      <body>
        <NavBar />
        <div className="Header">
          <h1>GroovnMusic</h1>
        </div>
        <div className="tagline">
          <h3>get into the groove....</h3>
        </div>

        <div className="search">
          <input type="text" className="input" placeholder="Search ...." />
          <ul>...</ul>
        </div>
        <Route path="/Log-In" component={Login} />
      </body>
    </>
  );
}

export default LandingPage;
