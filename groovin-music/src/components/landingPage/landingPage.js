import React, { useReducer } from 'react';
import './landingPage.css';

const OnChange = e => {};

function LandingPage() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    setUserInput({ [name]: value });
  };
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

        <div className="top-content">
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
