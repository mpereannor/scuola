import * as auth from '../auth';
import * as boards from '../boards';
import * as users from '../users';

import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducerCollection = combineReducers({ 
    onboard: auth.onboardingReducer,
    allUsers: users.userViewReducer,
    profile: users.profileReducer,
    userBoard: boards.boardReducer,
});

const devTooling = process.env.NODE_ENV === "production" 
?   compose( applyMiddleware(thunk)) 
:
compose(applyMiddleware(thunk, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

const store = createStore(
    reducerCollection,
    {},
    compose(
        // devTooling,
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

