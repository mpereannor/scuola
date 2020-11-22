import * as auth from '../auth';
import * as board from '../board';
import * as users from '../users';

import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducerCollection = combineReducers({ 
    onboard: auth.onboardingReducer,
    allUsers: users.userViewReducer,
    profile: users.profileReducer,
    board: board.boardReducer,
})

const store = createStore(
    reducerCollection,
    {},
    compose(
        applyMiddleware(
            thunk
            ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

