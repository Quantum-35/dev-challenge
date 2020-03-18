import { combineReducers } from 'redux'

import signupReducer from './reducers/signup';

const rootReducer = combineReducers({
  signup: signupReducer,
})

export default rootReducer