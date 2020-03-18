import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './containers/Register';
import Login from './containers/Login';
import rootReducer from './redux/rootReducers';
import ROUTES from './routes';
import PrivateRoute from './privateRoutes';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundColor: '#ececec', height: '100vh', padding: '30px'}}>
          <Switch>
            <Route exact path={ROUTES.login} component={Login} />
            <Route path={ROUTES.home} component={Register} />

            {/* <PrivateRoute exact path={ROUTES.dashboard} component={Dashboard} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
