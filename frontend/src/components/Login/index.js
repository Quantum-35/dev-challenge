import React from 'react';

import Card from '../Card';
import './login.css';

const Login = ({ updateState, errors, handleSubmitClicked}) => {

    return(
        <Card title="LOGIN">
            {errors && <span className="reg-errors">{errors} </span>}
            <input
                className="phone"
                onChange={e=> updateState('phone', e.target.value)}
                placeholder="phone number"
                type="number"
                size="10"
                required
            />
            <input
                className="password"
                onChange={e=> updateState('password', e.target.value)}
                placeholder="password"
                type="password"
                required
            />

            <button className="register" onClick={() => handleSubmitClicked()}>LOGIN</button>
            <span className="login-link">Not registered</span>
        </Card>
    );
}

export default Login;
