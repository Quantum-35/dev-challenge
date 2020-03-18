import axios from 'axios';

import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS } from './types';

const { REACT_APP_BASE_URL } = process.env;

export const signup = data => async dispatch => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const res = await axios.post(`${REACT_APP_BASE_URL}/personnel/register`, data);
        if(!res.data.success) return dispatch({ type: REGISTER_FAILED, errors: res })
        return dispatch({ type: REGISTER_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type:  REGISTER_FAILED, errors: error})
    }
}

export const login = data => async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const res = await axios.post(`${REACT_APP_BASE_URL}/personnel/login`, data);
        if(!res.data.success) return dispatch({ type: LOGIN_FAILED, errors: res })
        return dispatch({ type: LOGIN_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type:  LOGIN_FAILED, errors: error})
    }
}
