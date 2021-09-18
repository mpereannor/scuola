import * as types from './actionTypes';
import { axiosWithAuth } from '../../utils/axios';
import Cookies from 'js-cookie';

const userUrl = 'api/users/';

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
    const userId = localStorage.getItem('id')
    axiosWithAuth()
    .get(`${userUrl}${userId}`)
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
    axiosWithAuth()
    .put(`${userUrl}${userId}/profile`, userProfileData)
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
};

// export const displayUserProfile = userId => dispatch => { 
//     dispatch({ type: types.REQUEST_START });
//     userId = Cookies.get('userId');
//     axiosWithAuth()
//     .get(`${userUrl}${userId}/profile`)
//     .then(res => { 
//         dispatch({ 
//             type: types.DISPLAY_USER_PROFILE_SUCCESS,
//             payload: res.data
//         })
//     })
//     .catch(error => { 
//         dispatch({ 
//             type: types.DISPLAY_USER_PROFILE_FAILURE,
//             payload: error.message
//         });
//     });
// };