import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Onboard from './components/auth/Onboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Users from './components/auth/Users';
import Board from './components/board/Board';
import NavBar from './components/layouts/Navbar.js';
import ProfileDetails from './components/user/ProfileDetails';
import User from './components/user';

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
            <PrivateRoute
                path='/board'
                component={Board}
            />
            <Route
            path='/nav'
            component={NavBar}
            />
            <Route
            path='/profile'
            component={ProfileDetails}
            />
            <Route
            path='/user'
            component={User}
            />
        </div>
    )
}

export default App;