import axios from 'axios';

import { REGISTER_FAILED, REGISTER_SUCCESS, REGISTER_REQUEST } from './types';

const { REACT_APP_BASE_URL } = process.env;

export const signup = data => async dispatch => {
    console.log('data', data);
    dispatch({ type: REGISTER_REQUEST });
    try {
        const res = await axios.post(`${REACT_APP_BASE_URL}/personnel/register`, data);
        console.log(res);
        if(!res.data.success) return dispatch({ type: REGISTER_FAILED, errors: res })
        return dispatch({ type: REGISTER_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type:  REGISTER_FAILED, errors: error})
    }
}