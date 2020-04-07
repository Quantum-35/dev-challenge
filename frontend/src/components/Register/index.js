import React from 'react';

import Card from '../Card';
import './register.css';
import Loader from 'react-loader-spinner';

const Register = ({ updateState, errors, history, handleSubmitClicked, isSigningUp, signUpErrors}) => {

    return(
        <Card title="REGISTER">
            {errors && <span className="reg-errors">
                {errors} </span>
            }
            {signUpErrors && <span className="reg-errors">
                {signUpErrors && signUpErrors.data.message} </span>
            }
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

            <button className="register" onClick={() => handleSubmitClicked()}>
                {isSigningUp ? (
                    <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={40}
                        width={40}
                    />
                ) : 'REGISTER'}
            </button>
            <span className="login-link" onClick={() => history.push('/login')}>Already registered</span>
        </Card>
    );
}

export default Register;
