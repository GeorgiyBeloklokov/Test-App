import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signOut, getAuth} from "firebase/auth";
import {auth} from "../Firebase/firebase";



export const getSignOut = createAsyncThunk (
    'signout/getSignOut',
    async () => {
        const response = await signOut(auth);
        const data = await response;
        return data;
    })


const signoutSlice = createSlice({
    name:'signout',
    initialState:{
        errorMessage: null,
        errorCode: null,
        status: null,
        user:null
    },
    extraReducers: {
        [getSignOut.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getSignOut.fulfilled]: (state, { payload }) => {
            state.status = 'success'
        },
        [getSignOut.rejected]: (state, {payload}) => {
            state.status = 'failed'
            state.errorMessage = payload
            state.errorCode = payload
        },
    },
})

export default signoutSlice.reducer
