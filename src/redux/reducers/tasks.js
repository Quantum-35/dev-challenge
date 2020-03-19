import { GET_TASK_REQUEST, GET_TASK_FAILED, GET_TASK_SUCCESS } from '../types';

const initialState = {
    data: null,
    loading: false,
    errors: null,
  }
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK_REQUEST:
            return {...state, loading: true};
        case GET_TASK_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case GET_TASK_FAILED:
            return {...state, loading: false, errors: action.errors};
        default:
            return state
    }
  }