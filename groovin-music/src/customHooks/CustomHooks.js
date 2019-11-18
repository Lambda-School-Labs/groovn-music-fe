import React, { useState } from 'react';

export const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            console.log('fired');
            event.preventDefault();
        }
    }
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

