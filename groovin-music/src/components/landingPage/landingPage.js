import React, { useReducer } from 'react';

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
      <div className="Header">
        <h1>Hello from Groovn Music Landing Page!</h1>
      </div>
      <div className="Body">
        <form>
          <input
            type="text"
            placeholder="username"
            value={userInput.username}
            onChange={handleInput}
          />
          <input
            type="password"
            placeHolder="password"
            value={userInput.password}
            onChange={handleInput}
          ></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default LandingPage;
