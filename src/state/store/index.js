import * as reducers from '../reducers';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducerCollection = combineReducers({ 
    onboard: reducers.onboardingReducer,
    allUsers: reducers.userViewReducer,
    board: reducers.boardReducer
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

