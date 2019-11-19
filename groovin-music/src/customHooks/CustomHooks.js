import React, { useState } from 'react';

export const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            console.log('fired');
            event.preventDefault();
            callback();
            setInputs({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
        }
    }
    
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}


