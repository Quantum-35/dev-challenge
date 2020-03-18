import React, { useState } from 'react';
import { connect } from 'react-redux';

import RegisterComponent from '../../components/Register';
import { signup } from '../../redux/actions';

const Register = props => {
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    const updateState = (state, data) => {
        switch(state){
            case 'phone':
                setPhone(data);
                break;
            case 'password':
                setError(null);
                setPassword(data);
                break;
            case 'confirmPassword':
                setConfirmPassword(data);
                if(data !== password) {
                    setError('Password don\'t match')
                } else {
                    setError(null);
                }
                break;
            default:
                return;
        }
    }
    const validatePhone = () => {
        const isMatching = phone && phone.match(/^0[7][0-9]{8}$/);
        if(isMatching) return true
        return false;
    }

    const handleSubmitClicked = async () => {
        if(!validatePhone() || !phone) {
            return setError('Enter a valid phone number i.e 0721...');
        }
        if(!password) return setError('Invalid password input');
        if(password !== confirmPassword) {
            return setError('Password don\'t match');
        }
        if(password.length < 5) {
            return setError('Password should be at least 5 characters');
        }
        const data = {
            phone,
            password,
            history: props.history
        }
        await props.signup(data);
    }

    return(
        <RegisterComponent
            updateState={updateState}
            errors={error}
            handleSubmitClicked={handleSubmitClicked}
            isSigningUp={props.isSigningUp}
            signUpErrors={props.signUpErrors}
        />
    );
}

export default
connect(
    state => ({
        isSigningUp: state.signup.loading,
        signUpErrors: state.signup.errors,
        signedUp: state.signup.data
    }),
    dispatch => ({
        signup: data => dispatch(signup(data))
    })
)
(Register);
