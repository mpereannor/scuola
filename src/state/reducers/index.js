import * as types from '../actions/actionTypes';
import Cookies from 'js-cookie';

//onboarding
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
                error: action.payload
            }

        default:
            return state
    }

};

//profile
const initialProfile = { 
        image: '',
        // avatar: '',
        age: 0,
        gender: '',
        location: '', 
        bio: '',
        message: '',
        error: {},
        isFetching: false
}

export const profileReducer = (state = initialProfile, action) => { 
    switch(action.type) { 
        case types.REQUEST_START:
            return{ 
                ...state,
                isFetching: true,
            };
        
        case types.CREATE_USER_PROFILE_SUCCESS:
            return{ 
                ...state,
                image: action.payload.image,
                age: action.payload.age,
                gender: action.payload.gender,
                location: action.payload.location, 
                bio: action.payload.bio,
                message: action.payload.message,
                isFetching: false,
            };

        case types.CREATE_USER_PROFILE_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isFetching: false
            };
        
        case types.DISPLAY_USER_PROFILE_SUCCESS:
            return{ 
                ...state,
                // userProfile: state.profile.filter((item, index) => index === action.user_id),
                userProfile: action.payload,
                isFetching: false
            };

        case types.DISPLAY_USER_PROFILE_FAILURE:
            return{ 
                ...state,
                error: action.payload,
                isFetching: false
            };
        
        default:
            return state
    }
}

//user
const initialUsers = { 
    users: [],
    user: {},
    isFetching: false,
    error: {},
    message: ''
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
            };

        case types.GET_USER_SUCCESS:
            return {
                ...state, 
                user: state.users.filter((item => item.user_id === action.user_id)), 
                isFetching: false
            };

        case types.GET_USER_FAILURE:
            return{
                ...state, 
                error: action.payload,
                isFetching: false
            };
        default: 
            return{
                ...state, 
                isFetching: false
            }

    }   
}

const initialBoard = {
    board : {},
    error : {},
    message: '',
    isFetching: false
}

export const boardReducer = (state = initialBoard, action) => { 
    switch (action.type) { 
        case types.REQUEST_START:
            return { 
                ...state, 
                isFetching: true
            };

        case types.CREATE_BOARD_SUCCESS:
            return {
                ...state, 
                board: action.payload,
                isFetching: false
            };

        case types.CREATE_BOARD_FAILURE:
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