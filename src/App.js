import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Onboard from './components/auth/Onboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Users from './components/auth/Users';

const App = () => { 

    return (
        <div
            className='App'
        >
            SCUOLA!!!  
            <Route
                path='/register'
                component={Register}
            />
            <Route
                path='/login'
                component={Login}
            />
            <PrivateRoute
                exact
                path='/users'
                component={Users}
            />
            <PrivateRoute
                path='/onboard'
                component={Onboard}
            />
        </div>
    )
}

export default App;