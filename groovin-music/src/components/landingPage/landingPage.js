import React, { useState } from 'react';
import './landingPage.css';

const OnChange = e => {};

function LandingPage() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <>
      <body>

        <div className="Header">
          <h1>GroovnMusic</h1>
        </div>
        <div className="tagline">
          <h3>get into the groove....</h3>
        </div>
        <div className="Body">
          <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeHolder="password"></input>
          </form>
        </div>

      </body>
    </>
  );
}

export default LandingPage;
