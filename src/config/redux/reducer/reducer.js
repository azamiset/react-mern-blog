import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./HomeReducer";
import createBlogReducer from "./CreateBlogReducer";

const reducer = combineReducers({ homeReducer, globalReducer, createBlogReducer });

export default reducer;