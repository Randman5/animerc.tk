import {combineReducers, compose, createStore} from "redux";
import homeReducer from "./reducers/homeReducer";
const reducers = combineReducers({
    home : homeReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers , composeEnhancers())

export default store