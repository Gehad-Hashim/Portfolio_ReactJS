import { createStore } from "redux";
import combineReducers from "./Reducers/combinReducers";
import { composeWithDevTools } from "redux-devtools-extension";


const store=createStore(combineReducers,composeWithDevTools());

export default store;