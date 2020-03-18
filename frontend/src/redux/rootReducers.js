import { combineReducers } from 'redux'

import signupReducer from './reducers/signup';
import loginReducer from './reducers/login';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer
})

export default rootReducer