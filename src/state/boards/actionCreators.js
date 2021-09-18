import * as types from './actionTypes';
import { axiosWithAuth } from '../../utils/axios';

const boardUrl = 'api/boards/';

export const createBoard = boardData => dispatch => {

    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(boardUrl, boardData)
    .then(res => { 
        console.log('newday', res)
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
    const userId = 
    dispatch({ type: types.REQUEST_START});
    axiosWithAuth()
    .get(`${boardUrl}/${userId}`)
    .then(res => { 
        console.log('res', res)
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
export const getBoard = (boardId) => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .get(`${boardUrl}user_boards/${boardId}`)
    .then(res => { 
        dispatch({ 
            type: types.DISPLAY_BOARD_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({ 
            type: types.DISPLAY_BOARD_FAILURE,
            payload: error.message
        });
    });
}

export const updateBoard = (boardId) => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .patch(`${boardUrl}user_boards/${boardId}`)
    .then(res => { 
        dispatch({ 

            type: types.UPDATE_BOARD_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => { 
        dispatch({

            type: types.UPDATE_BOARD_FAILURE,
            payload: error.message
        })
    })
}

export const createGroup = (boardId, newGroupData) => dispatch => { 
    dispatch({ type: types.REQUEST_START });
    axiosWithAuth()
    .post(`${boardUrl}user_boards/${boardId}`, newGroupData)
    .then(res => { 
        dispatch({ 
            type: types.CREATE_GROUP_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        dispatch({

            type: types.CREATE_GROUP_FAILURE,
            payload: error.message
        });
    });
}



