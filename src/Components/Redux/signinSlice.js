import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signInWithEmailAndPassword , getAuth} from "firebase/auth";
import {app} from "../Firebase/firebase";



const auth = getAuth(app);

export const getSignIn = createAsyncThunk (
    'signin/getSignIn',
     async ({email,password}) => {
            let response =  await signInWithEmailAndPassword (auth, email, password);

            console.log(`response test  getSignIn`, response);
            return response;
     })


            /*.then ((userCredential) =>{
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })*/

const signinSlice = createSlice({
    name:'signin',
    initialState:{
        errorMessage: null,
        status: null,
        user:{}
    },

    extraReducers: {
        [getSignIn.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getSignIn.fulfilled]: (state, { payload }) => {
            state.status = 'success'
        },
        [getSignIn.rejected]: (state, {payload}) => {
            state.status = 'failed'
            state.errorMessage = payload
            console.log(`getSignIn.rejected`,payload)
            state.errorCode = payload
        },
    },
})

export default signinSlice.reducer
