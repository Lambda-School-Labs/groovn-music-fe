import React, { useReducer } from 'react';

function Registration() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      reEmail: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    console.log(`${name}: ${value}`);
    setUserInput({ [name]: value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={userInput.firstName}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={userInput.lastName}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="display name"
          name="displayName"
          value={userInput.displayName}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={userInput.email}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="re-enter email"
          name="reEmail"
          value={userInput.reEmail}
          onChange={handleInput}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
