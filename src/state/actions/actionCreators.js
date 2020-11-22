import * as types from './actionTypes';
import { axiosWithAuth } from '../../utils/axios';
import Cookies from 'js-cookie';
import { history } from '../../index'

const registerUrl = 'api/auth/register';
const loginUrl = 'api/auth/login';
const userUrl = 'api/users/';
const boardUrl = 'api/boards/';

export const register = credentials => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(registerUrl, credentials)
    .then(res => {
        Cookies.set('token', res.data.token);
        Cookies.set('userId', res.data.id);
        Cookies.set('position', res.data.position)
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

export const logout = () => { 
    Cookies.remove();
    return{ type: types.LOGOUT}
} 


export const getUsers = () => dispatch => {
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .get(userUrl)
    .then(res => { 
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

export const getUser = id => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    id = Cookies.get('userId')
    axiosWithAuth()
    .get(`${userUrl}${id}`)
    .then(res => { 
        dispatch({ 
            type: types.GET_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.GET_USER_FAILURE,
            payload: error.message
        })
    })
};



export const createUserProfile = (userId, userProfileData) => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    userId = Cookies.get('userId');
    console.log('the user id is => ', userId)
    axiosWithAuth()
    .put(`${userUrl}/${userId}/profile`, userProfileData)
    .then(res => { 
        dispatch({ 
            type: types.CREATE_USER_PROFILE_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.CREATE_USER_PROFILE_FAILURE,
            payload: error.message
        })
    })
}

export const displayUserProfile = userId => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .get(`${userUrl}/${userId}`)
    .then(res => { 
        dispatch({ 
            type: types.DISPLAY_USER_PROFILE_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.DISPLAY_USER_PROFILE_FAILURE,
            payload: error.message
        });
    });
}

export const createBoard = boardData => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(boardUrl, boardData)
    .then(res => { 
        dispatch({ 
            type: types.CREATE_BOARD_SUCCESS, payload: res.data
        })
        console.log('boardData', res.data);
    })
    .catch(error => { 
        dispatch({ 
            type: types.CREATE_BOARD_FAILURE, payload: error.message
        })
    })
}



