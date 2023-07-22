import { combineReducers } from "redux";
import langReducer from "./langReducer";
import themeReducer from "./themeReducer";
import listReducer from "./listReducer";
import loaderReducer from "./loaderReducer";


export default combineReducers({
    langRed: langReducer,
    themeRed: themeReducer,
    listRed: listReducer,
    loadRed:loaderReducer
})