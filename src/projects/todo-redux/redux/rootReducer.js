import { combineReducers } from "redux";
import { todoReducer } from "./reducer";


export const rootReducer = combineReducers({
    todoReducer: todoReducer
})