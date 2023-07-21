import { combineReducers } from "redux";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";


export default combineReducers({
    langRed: langReducer,
    themeRed: themeReducer
})