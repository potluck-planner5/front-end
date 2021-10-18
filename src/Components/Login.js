import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const LoginPage = () => {
    const { push } = useHistory();

    const [state, setState] = useState({
        authentication: {
            username_email: '',
            password: ''
        },
        error: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setState({
            authentication: {
                ...state,
                [e.target.name]: e.target.value
            }
        });
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Username/Email: </label>
                <input name='username_email' type='text' value={state.username_email} onChange={handleChange}></input>
                <label>Password: </label>
                <input name='password' type='password' value={state.password} onChange={handleChange}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;