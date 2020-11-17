import * as types from '../actions/actionTypes';
import Cookies from 'js-cookie';
const initialOnboardingState = { 
    // user : {},
    user_id: Cookies.get('userId') || '',
    username: Cookies.get('username') || '',
    fullname: Cookies.get('fullname')|| '',
    email: Cookies.get('email') || '',
    position: Cookies.get('position') || '',
    message: '',
    error: {},
    isFetching: false, 
    isLoggedIn: false 
};

export const onboardingReducer = (state = initialOnboardingState, action) => {
    switch (action.type) {
        case types.REQUEST_START:
            return { 
                // ...state,
                isFetching: true,
                error: ''
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                // user: action.payload,
                // id: action.payload.id,
                user_id: action.payload.id,
                username: action.payload.username,
                fullname: action.payload.fullname,
                email: action.payload.email,
                position: action.payload.position,
                message: action.payload.message,
                isFetching: false, 
                isLoggedIn: true
            };
            
            case types.REGISTER_FAILURE: 
            return { 
                ...state,
                // user: {},
                error: action.payload,
                isFetching: false
            };
            
            case types.LOGIN_SUCCESS:
                return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                // user: action.payload,
                message: action.payload.message,
                // user: {},
                isFetching: false,
                isLoggedIn: true,
            };
        
        case types.LOGIN_FAILURE:
            return{ 
                ...state,
                // user: {},
                error: action.payload,
                isFetching: false
            }
        case types.UPDATE_POSITION_SUCCESS:
            return {
                ...state,
                // email: action.payload.email,
                // password: action.payload.password,
                // id: action.payload.id,
                position: action.payload.position,
                isFetching: false,
                isLoggedIn: true,
            };
        
        case types.UPDATE_POSITION_FAILURE:
            return{ 
                ...state,
                // user: {},
                error: action.payload,
                isFetching: false
            }

        case types.LOGOUT:
            return {
                ...state, 
                error: action.payload
            }

        default:
            return state
    }

};


const initialUsers = { 
    users: [],
    error: {},
    isFetching: false
}

export const userViewReducer = (state = initialUsers, action) => { 
    switch (action.type) { 
        case types.REQUEST_START:
            return { 
                ...state, 
                isFetching: true
            };

        case types.GET_USERS_SUCCESS:
            return {
                ...state, 
                users: action.payload,
                isFetching: false
            };

        case types.GET_USERS_FAILURE:
            return{
                ...state, 
                error: action.payload,
                isFetching: false
            }
        default: 
            return{
                ...state, 
                isFetching: false
            }

    }   
}