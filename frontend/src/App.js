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
import Page404 from './components/404';
import PrivateRoute from './privateRoutes';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundColor: '#ececec', height: '100vh', padding: '30px'}}>
          <Switch>
            <Route exact path={ROUTES.login} component={Login} />
            <Route exact path={ROUTES.home} component={Register} />

            {/* <PrivateRoute exact path={ROUTES.dashboard} component={Dashboard} /> */}
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
