import React, { useState } from 'react';
import RestaurantProfile from '../Components/RestaurantProfile';
import { useNavigate } from 'react-router-dom';
import * as Error from '../Error';

export const RestaurantProfilePage = () => {
    
    const [addEmailInput, setEmailInput] = useState('')
    const [addPasswordInput, setPasswordInput] = useState('') 

    const navigate = useNavigate();

    // Loads the page with the user's email address in the URL
    const urlName = addEmailInput.substring(0, addEmailInput.indexOf('@'))

    const handleFormChangeEmail = (emailInput) => {
        setEmailInput(emailInput)
    }

    const handleFormChangePassword = (passwordInput) => {
        setPasswordInput(passwordInput)
    }

    const handleFormSubmit = () => {
        fetch('/restaurant', {
            method: 'POST',
            body: JSON.stringify({email: addEmailInput, password: addPasswordInput}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                alert(Error.getErrorMessage(response.status))
            }   
        return response.json();
         })
        .then(data => {
            if (data.response === 200) {
                alert(Error.getErrorMessage(data.response))
                navigate(`/restaurant/${urlName}`,{ state:{data} })
            }
        })
    };

return (
    <div>
        <RestaurantProfile emailInput={ addEmailInput } passwordInput={ addPasswordInput } 
        onFormChangeEmail={handleFormChangeEmail} onFormChangePassword={handleFormChangePassword} 
        onFormSubmit={handleFormSubmit}/>
    </div>
    )
}