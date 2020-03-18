import axios from 'axios';
import ROUTES from '../routes';

import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS } from './types';

const { REACT_APP_BASE_URL } = process.env;

export const signup = data => async dispatch => {
    const history = data.history;
    delete data.history;
    dispatch({ type: REGISTER_REQUEST });
    try {
        const res = await axios.post(`${REACT_APP_BASE_URL}/personnel/register`, data);
        dispatch({ type: REGISTER_SUCCESS, payload: res })
        return history.push('/login');
    } catch (error) {
        dispatch({ type:  REGISTER_FAILED, errors: error.response})
    }
}

export const login = data => async dispatch => {
    const history = data.history;
    delete data.history;
    dispatch({ type: LOGIN_REQUEST });
    try {
        const res = await axios.post(`${REACT_APP_BASE_URL}/personnel/login`, data);
        if(!res.data.success) return dispatch({ type: LOGIN_FAILED, errors: res })
        dispatch({ type: LOGIN_SUCCESS, payload: res })
        localStorage.setItem('access_token', res.data.accessToken)
        history.push(`${ROUTES.dashboard}`);
        return;
    } catch (error) {
        dispatch({ type:  LOGIN_FAILED, errors: error.response})
    }
}
