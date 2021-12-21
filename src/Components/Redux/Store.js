import {combineReducers, configureStore} from "@reduxjs/toolkit";
import editQuestionSlice from "./editQuestionSlice";
import signupSlice from "./signupSlice";
import signinSlice from "./signinSlice";
import signoutSlice from "./signoutSlice";



const rootReducer = combineReducers( {

    editQuest: editQuestionSlice,
    signup: signupSlice,
    signin: signinSlice,
    signout: signoutSlice

});


export const store = configureStore ({
    reducer: rootReducer

});