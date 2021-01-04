import * as types from './actionTypes';

const initialBoard = {
    board : {},
    error : {},
    displayBoard: [],
    displaySingleBoard: {},
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
            };

        case types.DISPLAY_BOARDS_SUCCESS:
            return { 
                ...state,
                displayBoard: action.payload,
                isFetching: false
            };
        
        case types.DISPLAY_BOARD_SUCCESS:
            return { 
                ...state,
                displaySingleBoard: action.payload,
                isFetching: false
            };
        
        case types.DISPLAY_BOARD_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isFetching: false
            };
        
        case types.UPDATE_BOARD_SUCCESS:
            return { 
                ...state,
                board: action.payload,
                isFetching: false,
            };
        
        case types.UPDATE_BOARD_FAILURE:
            return { 
                ...state,
                error: action.payload,
                isFetching: false
            };

        case types.CREATE_GROUP_SUCCESS:
            return { 
                ...state,
                groups: state.board.groups.push(action.payload),
                isFetching: false
            };
        
        case types.CREATE_GROUP_FAILURE: 
            return { 
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