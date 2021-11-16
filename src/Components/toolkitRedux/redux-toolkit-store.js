import {combineReducers, configureStore} from "@reduxjs/toolkit";
import questionReducerSlice from "./questionReducerSlice";


const rootReducer = combineReducers( {

    questReducer: questionReducerSlice

})


 export const store = configureStore ({
    reducer: rootReducer

 })