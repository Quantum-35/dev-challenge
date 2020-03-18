import { REGISTER_FAILED, REGISTER_SUCCESS, REGISTER_REQUEST } from '../types';

const initialState = {
    data: null,
    loading: false,
    errors: null,
  }
  
  export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {...state, loading: true};
        case REGISTER_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case REGISTER_FAILED:
            return {...state, loading: false, errors: action.errors};
        default:
            return state
    }
  }