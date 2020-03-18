import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Register from './containers/Register';
import rootReducer from './redux/rootReducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: '#ececec', height: '100vh', padding: '30px'}}>
        <Register />
      </div>
    </Provider>
  );
}

export default App;
