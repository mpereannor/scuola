import * as types from './actionTypes';
import { Axios, axiosWithAuth } from '../../utils/axios';
import Cookies from 'js-cookie';
import { history } from '../../index'

const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';
const userUrl = 'api/users';
const updatePositionUrl= 'api/auth/position'
// const updatePositionUrl = 'api/user'
export const register = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(registerUrl, credentials)
    .then(res => {
        Cookies.set('token', res.data.token);
        Cookies.set('userId', res.data.id);
        Cookies.set('position', res.data.position)
        console.log(res.data)
        history.push(`/onboard/${res.data.id}`);
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
        Cookies.set('token', res.data);
        Cookies.set('userId', res.data._id);
        history.push('/onboard/');
        dispatch({ 
            type: types.LOGIN_SUCCESS, payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.LOGIN_FAILURE, payload: error.message})
    })
}

export const updatePosition = (id, positionData)=> dispatch => { 
    dispatch({ type: types.REQUEST_START });
        // console.log(history.params(id));
    console.log(Cookies.get('userId'));
    id = Cookies.get('userId')
    axiosWithAuth()
    .patch(`/api/users/${id}`, positionData)
    .then(res => { 
        dispatch({ 
            type: types.UPDATE_POSITION_SUCCESS, payload: res.data.position
        })
        console.log('infinity', res.data)
        history.push('/users');
    })
    .catch(error => { 
        dispatch({ 
            type: types.UPDATE_POSITION_FAILURE, payoad: error.message
        })
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