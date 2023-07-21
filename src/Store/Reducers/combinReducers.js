import { combineReducers } from "redux";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";
import listReducer from "./listReducer";


export default combineReducers({
    langRed: langReducer,
    themeRed: themeReducer,
    listRed:listReducer
})