import React, { useState } from 'react';
import { useSignUpForm } from '../customHooks/CustomHooks.js';

export default function Signup() {

    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(login);

    function login() {
       console.log(inputs)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                    <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                </div>

                <div>
                    <label>Email Address</label>
                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>

                <div>
                    <label>Password</label>
                        <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

