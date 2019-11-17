import React, { useReducer } from 'react';
import './landingPage.css';

function Login() {
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
        <button>Login</button>
        <div>dont have an account?</div>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
