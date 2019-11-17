import React, { useReducer } from 'react';
import './landingPage.css';

function LandingPage() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    console.log(`${name}: ${value}`);

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
            <input
              type="text"
              name="username"
              placeholder="username"
              value={userInput.username}
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              placeHolder="password"
              value={userInput.password}
              onChange={handleInput}
            />
          </form>
        </div>
      </body>
    </>
  );
}

export default LandingPage;
