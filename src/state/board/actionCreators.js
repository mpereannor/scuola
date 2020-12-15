import * as types from './actionTypes';
import { axiosWithAuth } from '../../utils/axios';
import Cookies from 'js-cookie';

const boardUrl = 'api/boards/';

export const createBoard = boardData => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(boardUrl, boardData)
    .then(res => { 
        dispatch({ 
            type: types.CREATE_BOARD_SUCCESS, payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.CREATE_BOARD_FAILURE, payload: error.message
        })
    })
}


export const getBoards = () => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .get(`${boardUrl}user_boards`)
    .then(res => { 
        dispatch({ 
            type: types.DISPLAY_BOARDS_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.DISPLAY_BOARDS_FAILURE,
            payload: error.message
        });
    });
}