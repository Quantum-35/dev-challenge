import React, { useState } from 'react';

import RegisterComponent from '../../components/Register';

const Register = () => {
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

    return(
        <RegisterComponent
            phone={phone}
            password={password}
            confirmPassword={confirmPassword}
            updateState={updateState}
            errors={error}
        />
    );
}

export default Register;
