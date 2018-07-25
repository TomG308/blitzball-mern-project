import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import teamReducer from "./teams"
import playerReducer from './players';

const reducer = combineReducers({
    teams: teamReducer,
    players: playerReducer
})

// const store = createStore(reducer, applyMiddleware(thunk))
// store.subscribe(()=>console.log(store.getState()))
// export default store;
export default createStore(reducer, applyMiddleware(thunk))