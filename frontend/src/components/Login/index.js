import React from 'react';

import Card from '../Card';
import './login.css';
import Loader from 'react-loader-spinner';

const Login = ({ updateState, logging,history ,errorLogging, handleSubmitClicked}) => {
    return(
        <Card title="LOGIN">
            {errorLogging && <span className="reg-errors">{
                errorLogging && 'Invalid password or phone'
            }
            </span>}
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

            <button className="register" onClick={() => handleSubmitClicked()}>
                {logging ? (
                    <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={40}
                        width={40}
                    />
                ) : 'LOGIN'
                }
            </button>
            <span className="login-link" onClick={() => history.push('/')}>Not registered</span>
        </Card>
    );
}

export default Login;
