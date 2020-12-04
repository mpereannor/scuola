import React from 'react';
import { useRoutes } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './globals/styles';
import theme from './theme/';

import routes from './routes';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Onboard from './components/auth/Onboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Users from './components/user/Users';
import Board from './components/board/Board';
import NavBar from './components/layouts/DashboardLayout/Navbar/index.js';
import ProfileDetails from './components/user/ProfileDetails';
import User from './components/user';

const App = () => { 
    const routing = useRoutes(routes);
    return (
        <ThemeProvider 
        theme={ theme }
        >
            <GlobalStyles/>
            { routing }
        </ThemeProvider>
    )
};
    /*

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
            path='/user/:id'
            render={ props => <User {...props} />}
            />
        </div>
    )
}

*/
export default App;