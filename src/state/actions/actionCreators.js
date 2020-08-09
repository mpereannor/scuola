import * as types from './actionTypes';
import { Axios, axiosWithAuth } from '../../utils/axios';
import Cookies from 'js-cookie';
import { history } from '../../index'

const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';
const userUrl = 'api/user';

export const register = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    Axios()
    .post(registerUrl, credentials)
    .then(res => { 
        Cookies.set('token', res.data.token);
        console.log('token')
        history.push('/users');
        dispatch({ 
            type: types.REGISTER_SUCCESS, payload: res.data
        });
    })
    .catch(error => { 
        dispatch({ 
            type: types.REGISTER_FAILURE, payload: error.message
        })
    })
}

export const login = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START});
    axiosWithAuth()
    .post(loginUrl, credentials)
    .then(res => { 
        console.log(res);
        Cookies.set('token', res.data)
        history.push('/users');
        dispatch({ 
            type: types.LOGIN_SUCCESS, payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.LOGIN_FAILURE, payload: error.message})
    })
}

export const logout = () => { 
    Cookies.remove();
    return{ type: types.LOGOUT}
} 


export const getUsers = () => dispatch => {
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .get(userUrl)
    .then(res => { 
        console.log('utilisateurs', res);
        dispatch({
            type: types.GET_USERS_SUCCESS, 
            payload: res.data
        })
    })
    .catch(error => {
        dispatch({
            type: types.GET_USERS_FAILURE,
            payload: error.message
        });
    });
};