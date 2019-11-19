import React, { useReducer } from 'react';
import './landingPage.css';

function Login() {
  // const [userInput, setUserInput] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {
  //     username: '',
  //     password: '',
  //   }
  // );

  // const handleInput = ({ target: { name, value } }) => {
  //   console.log(`${name}: ${value}`);

  //   setUserInput({ [name]: value });
  // };

  return (
    <div className="top-content">
      <button className="get-started">
        <a href="http://localhost:4000/auth/spotify">Get Started</a>
      </button>
    </div>
  );
}

export default Login;
