import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ component:Component, ...rest }) => (
    <Route
        { ...rest}
        render={props => Cookies.get('token')
        ? (<Component { ...props}/>)
        : (<Navigate to='/login'/>)
    }
    />
);


export default PrivateRoute;