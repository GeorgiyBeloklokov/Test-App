import {combineReducers, configureStore} from "@reduxjs/toolkit";
import editQuestionSlice from "./editQuestionSlice";
import signupSlice from "./signupSlice";
import signinSlice from "./signinSlice";


const rootReducer = combineReducers( {

    editQuest: editQuestionSlice,
    signup: signupSlice,
    signin: signinSlice

});


export const store = configureStore ({
    reducer: rootReducer

});