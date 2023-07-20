import { createStore } from "redux";
import langReducer from "./Reducers/langReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const store=createStore(langReducer,composeWithDevTools());

export default store;