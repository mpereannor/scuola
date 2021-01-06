import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component:Component, ...rest }) => (
    <Route
        { ...rest}
        render={props => Cookies.get('sessionId')
        ? (<Component { ...props}/>)
        : (<Navigate to='/app/login'/>)
    }
    />
);


export default PrivateRoute;