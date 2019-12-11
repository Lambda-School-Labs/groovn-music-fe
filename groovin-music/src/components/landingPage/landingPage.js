import React, { useReducer } from 'react';
import { Route } from 'react-router-dom';
import LandingHome from './LandingHome';
import './landingPage.css';
import NavBar from '../NavBar/navbar.js';

function LandingPage() {
  return (
    <>
      <body>
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
        <LandingHome />
      </body>
    </>
  );
}

export default LandingPage;
