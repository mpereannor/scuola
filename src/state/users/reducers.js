import * as types from './actionTypes';
import Cookies from 'js-cookie';

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
                user: action.payload,
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
};

const initialProfile = { 
    image: '',
    age: 0,
    gender:  '',
    location:  '', 
    bio:  '',
    userProfile: {},
    error: {},
    message: '',
    isFetching: false
};
// const initialProfile = { 
//     image: Cookies.get('image') || '',
//     age: Cookies.get('age') || 0,
//     gender: Cookies.get('gender') || '',
//     location: Cookies.get('location') || '', 
//     bio: Cookies.get('bio') || '',
//     userProfile: {},
//     error: {},
//     message: '',
//     isFetching: false
// };

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
                // userProfile: action.payload,
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
