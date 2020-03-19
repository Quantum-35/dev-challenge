import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types';

const initialState = {
    data: null,
    loading: false,
    errors: null,
  }
  
  export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case LOGIN_FAILED:
            return {...state, loading: false, errors: action.errors};
        default:
            return state
    }
  }