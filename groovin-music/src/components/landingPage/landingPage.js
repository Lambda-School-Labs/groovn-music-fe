import React, { useState } from 'react';
import './landingPage.css';

const OnChange = e => {};

function LandingPage() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <>
      <div className="Header">
        <h1>Groovn Music</h1>
        <h3>just groove .....</h3>
      </div>
      <div className="Body">
        <form>
          <input type="text" placeholder="username"></input>
          <input type="password" placeHolder="password"></input>
        </form>
      </div>
    </>
  );
}

export default LandingPage;
