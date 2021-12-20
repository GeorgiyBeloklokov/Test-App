import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {app} from "../../firebase-config";



const auth = getAuth(app);

export const getSignUp = createAsyncThunk (
    'signup/getSignUp',
      async ({email,password}) => {
          const response = await createUserWithEmailAndPassword(auth, email, password);
const data = await response;
return data;
          /*.then ((userCredential) =>{
              const user = userCredential.user;

          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

          })}*/
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
        [getSignUp.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getSignUp.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.status = 'success'
        },
        [getSignUp.rejected]: (state, {payload}) => {
            state.status = 'failed'
            state.errorMessage = payload
            state.errorCode = payload
        },
    },
})

export default signupSlice.reducer