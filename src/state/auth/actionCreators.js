import * as types from './actionTypes';
import { Axios, axiosWithAuth } from '../../utils/axios';
import history from '../../utils/history';


const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';

export const register = (credentials) => dispatch => { 
    
    dispatch({ type: types.REQUEST_START });
    Axios()
    .post(registerUrl, credentials)
    .then(res => {
      
        dispatch({ 
            type: types.REGISTER_SUCCESS, payload: res.data
        });
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.user.id)
        history.push(`/login`);
      
    })
    .catch(error => { 
        dispatch({ 
            type: types.REGISTER_FAILURE, payload: error.message
        })
    })
}

export const login = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START});
    Axios()
    .post(loginUrl, credentials)
    .then(res => { 
        dispatch({ 
            type: types.LOGIN_SUCCESS, payload: res.data
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id', res.data.user.id);
        const userId = localStorage.getItem('id');
        history.push(`/app/dashboard/${userId}`);
    })
    .catch(error => { 
        dispatch({ 
            type: types.LOGIN_FAILURE, payload: error.message})
    })
}

export const logout = () => {
    localStorage.clear()
    history.push('/login');
    return{ type: types.LOGOUT};
} 

export const updatePosition = (id, positionData)=> dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .patch(`api/users/${id}`, positionData)
    .then(res => { 
        dispatch({ 
            type: types.UPDATE_POSITION_SUCCESS, payload: res.data.position
        })
        history.push('/app/board');
    })
    .catch(error => { 
        dispatch({ 
            type: types.UPDATE_POSITION_FAILURE, payoad: error.message
        })
    })
}
