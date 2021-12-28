import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Firebase/firebase";




export const getSignUp = createAsyncThunk (
    'signup/getSignUp',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            return user;
        } catch (error) {
            const data = error.message;
            let errorMessage =  data.match(/(?<=\/).+(?=\))/g) ;
            return rejectWithValue(errorMessage);
        }
    })


const signupSlice = createSlice({
    name:'signup',
    initialState:{
        errorMessage: null,
        errorCode: null,
        status: null,
        user:null
    },
    extraReducers: {
        [getSignUp.pending]: (state) => {
            state.status = 'loading'
            state.errorMessage = null
        },
        [getSignUp.fulfilled]: (state, action) => {
            state.status = 'success'
            state.user = action.payload
        },
        [getSignUp.rejected]: (state, action) => {
            state.status = 'failed'
            console.log(`signupSlice.rejected`, action.payload)
            state.errorMessage = action.payload
            state.errorCode = action.payload
        },
    },
})

export default signupSlice.reducer
