import React, { useState } from 'react';
import { connect } from 'react-redux';

import LoginComponent from '../../components/Login';
import { login } from '../../redux/actions';

const Login = props => {
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);

    const updateState = (state, data) => {
        switch(state){
            case 'phone':
                setPhone(data);
                break;
            case 'password':
                setPassword(data);
                break;
            default:
                return;
        }
    }

    const handleSubmitClicked = () => {
        const data = {
            phone, password
        }
        props.login(data);
    }

    return(
        <LoginComponent
            updateState={updateState}
            errors={props.error}
            handleSubmitClicked={handleSubmitClicked}
        />
    );
}

export default
connect(
    state => ({}),
    dispatch => ({
        login: data => dispatch(login(data))
    })
)
(Login);
