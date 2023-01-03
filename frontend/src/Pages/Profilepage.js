import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../Components/Profile';
import {Link, useNavigate} from 'react-router-dom';


export const Profilepage = () => {
    
    const [addEmailInput, setEmailInput] = useState('')
    const [addPasswordInput, setPasswordInput] = useState('') 
    const [data, setData] = useState([])

    const navigate = useNavigate();

    // Loads the page with the name of the user TODO: make it so that the email has to be an email
    const urlName = addEmailInput//.substring(0, addEmailInput.indexOf('@'))

    const handleFormChangeEmail = (emailInput) => {
        setEmailInput(emailInput)
    }

    const handleFormChangePassword = (passwordInput) => {
        setPasswordInput(passwordInput)
    }

    const handleFormSubmit = () => {
        fetch('/profile', {
            method: 'POST',
            body: JSON.stringify({email: addEmailInput, password: addPasswordInput}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`This is an HTTP error: The status is ${response.status}`)
            }   
        return response.json();
         })
        .then(data => {
                setData(data)
                navigate(`/profile/${urlName}`,{ state:{data} })
        })
        .catch(error => {
            console.log(error)
        })
    };

return (
    <div>
        <Profile emailInput={ addEmailInput } passwordInput={ addPasswordInput } 
        onFormChangeEmail={handleFormChangeEmail} onFormChangePassword={handleFormChangePassword} 
        onFormSubmit={handleFormSubmit} />
    </div>
    )
}