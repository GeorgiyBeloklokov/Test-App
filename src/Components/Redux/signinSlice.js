import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {signInWithEmailAndPassword , getAuth} from "firebase/auth";
import {app} from "../../firebase-config";



const auth = getAuth(app);

export const getSignIn = createAsyncThunk (
    'signin/getSignIn',
    async ({email,password}) => {
        const response = await signInWithEmailAndPassword (auth, email, password);
        const data = await response;
console.log(`getSignIn`,data);
        return data;

            /*.then ((userCredential) =>{
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })*/
    })
const signinSlice = createSlice({
    name:'signin',
    initialState:{
        errorMessage: null,
        errorCode: null,
        status: null,
        user:null
    },
    extraReducers: {
        [getSignIn.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getSignIn.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.status = 'success'
        },
        [getSignIn.rejected]: (state, {payload}) => {
            state.status = 'failed'
            state.errorMessage = payload
            state.errorCode = payload
        },
    },
})

export default signinSlice.reducer