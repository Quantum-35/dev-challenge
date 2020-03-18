import React from 'react';

import Card from '../Card';
import './register.css';

const Register = ({ updateState, errors, handleSubmitClicked}) => {

    return(
        <Card title="REGISTER">
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
            <input
                className="password"
                onChange={e=> updateState('confirmPassword', e.target.value)}
                placeholder="confirm password"
                type="password"
                required
            />

            <button className="register" onClick={() => handleSubmitClicked()}>REGISTER</button>
            <span className="login-link">Already registered</span>
        </Card>
    );
}

export default Register;
