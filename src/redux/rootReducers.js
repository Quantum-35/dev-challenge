import { combineReducers } from 'redux'

import signupReducer from './reducers/signup';
import loginReducer from './reducers/login';
import taskAssignedReducer from './reducers/tasks';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  tasks: taskAssignedReducer
})

export default rootReducer