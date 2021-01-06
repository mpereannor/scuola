import * as types from './actionTypes';
import Cookies from 'js-cookie';

const initialOnboardingState = { 
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
                isFetching: true,
                error: ''
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
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
                error: action.payload,
                isFetching: false
            };
            
            case types.LOGIN_SUCCESS:
                return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                message: action.payload.message,
                isFetching: false,
                isLoggedIn: true,
            };
        
        case types.LOGIN_FAILURE:
            return{ 
                ...state,
                error: action.payload,
                isFetching: false
            }
        case types.UPDATE_POSITION_SUCCESS:
            return {
                ...state,
    
                position: action.payload.position,
                isFetching: false,
                isLoggedIn: true,
            };
        
        case types.UPDATE_POSITION_FAILURE:
            return{ 
                ...state,
                error: action.payload,
                isFetching: false
            }

        case types.LOGOUT:
            return {
                ...state, 
                user_id: '',
                isLoggedIn: false,
                error: action.payload
            }

        default:
            return state
    }

};