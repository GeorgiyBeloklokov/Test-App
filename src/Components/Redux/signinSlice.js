import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const getSignIn = createAsyncThunk(
  "signin/getSignIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      return user;
    } catch (error) {
      const data = error.message;
      let errorMessage = data.match(/(?<=\/).+(?=\))/g);
      return rejectWithValue(errorMessage);
    }
  }
);

const signinSlice = createSlice({
  name: "signin",
  initialState: {
    errorCode: null,
    errorMessage: null,
    status: null,
    user: null,
  },

  extraReducers: {
    [getSignIn.pending]: (state) => {
      state.status = "loading";
      state.errorMessage = null;
    },
    [getSignIn.fulfilled]: (state, action) => {
      state.status = "success";
      /*console.log(`getSignIn.fulfilled`, action.payload)*/
      state.user = action.payload;
    },
    [getSignIn.rejected]: (state, action) => {
      state.status = "failed";
      state.errorMessage = action.payload;
      /*console.log(`getSignIn.rejected`, action.payload)*/
      state.errorCode = action.payload;
    },
  },
});

export default signinSlice.reducer;
