import React, { useReducer } from 'react';
import Login from './Login';
import './landingPage.css';

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
        <Login />
      </body>
    </>
  );
}

export default LandingPage;
