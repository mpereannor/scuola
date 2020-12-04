import * as types from './actionTypes';
import { axiosWithAuth } from '../../utils/axios';
import history from '../../utils/history';
import Cookies from 'js-cookie';

const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';

export const register = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(registerUrl, credentials)
    .then(res => {
        Cookies.set('token', res.data.token);
        Cookies.set('userId', res.data.id);
        Cookies.set('position', res.data.position)
        history.push(`/onboard/`);
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

export const logout = () => { 
    Cookies.remove();
    history.push('/onboard/');
    return{ type: types.LOGOUT};
} 

export const updatePosition = (id, positionData)=> dispatch => { 
    dispatch({ type: types.REQUEST_START });
    id = Cookies.get('userId')
    axiosWithAuth()
    .patch(`api/users/${id}`, positionData)
    .then(res => { 
        dispatch({ 
            type: types.UPDATE_POSITION_SUCCESS, payload: res.data.position
        })
        history.push('/board');
    })
    .catch(error => { 
        dispatch({ 
            type: types.UPDATE_POSITION_FAILURE, payoad: error.message
        })
    })
}
