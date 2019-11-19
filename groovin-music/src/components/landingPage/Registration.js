import React, { useReducer } from 'react';
import './landingPage.css';

function Registration() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      reEmail: '',
      password: '',
      rePassword: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    console.log(`${name}: ${value}`);
    setUserInput({ [name]: value });
  };

  const handleSubmit = () => {
    setUserInput({
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      reEmail: '',
      password: '',
      rePassword: '',
    });
  };

  return (
    <div>
      <form className="registration">
        <input
          className="reg-input"
          type="text"
          placeholder="first name"
          name="firstName"
          value={userInput.firstName}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="text"
          placeholder="last name"
          name="lastName"
          value={userInput.lastName}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="text"
          placeholder="display name"
          name="displayName"
          value={userInput.displayName}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="text"
          placeholder="email"
          name="email"
          value={userInput.email}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="text"
          placeholder="re-enter email"
          name="reEmail"
          value={userInput.reEmail}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="password"
          placeholder="password"
          name="password"
          value={userInput.password}
          onChange={handleInput}
        />
        <input
          className="reg-input"
          type="password"
          placeholder="rePassword"
          name="rePassword"
          value={userInput.rePassword}
          onChange={handleInput}
        />
        <button className="reg-input">Register</button>
      </form>
    </div>
  );
}

export default Registration;
