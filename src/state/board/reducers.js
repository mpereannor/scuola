import * as types from './actionTypes';
import Cookies from 'js-cookie';

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