import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, update } from "firebase/database";
import { auth, database } from "../Firebase/firebase";

export const getSignUp = createAsyncThunk(
  "signup/getSignUp",
  async ({ email, password }, { rejectWithValue, getState }) => {
    const userId = auth.currentUser.uid;
    const state = getState();
    const data = state.editQuest.questions;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await update(ref(database, `users/userId: ${response.user.uid}`), {
        question: data,
      });
      const user = response.user;
      return user;
    } catch (error) {
      const data = error.message;
      let errorMessage = data.match(/(?<=\/).+(?=\))/g);
      return rejectWithValue(errorMessage);
    }
  }
);

/* export const setUserData = createAsyncThunk(
  "signup/setUserData",
  async ({ rejectWithValue, getState }) => {
    const userId = auth.currentUser.uid;
    const state = getState();
    const data = state.editQuest.questions;
    try {
      await update(ref(database, `users/userId: ${userId}`), {
        questions: data,
      });
      debugger;
    } catch (error) {
      const data = error.message;
      let errorMessage = data.match(/(?<=\/).+(?=\))/g);
      return rejectWithValue(errorMessage);
    }
  }
); */

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    errorMessage: null,
    errorCode: null,
    status: null,
    user: null,
  },
  extraReducers: {
    [getSignUp.pending]: (state) => {
      state.status = "loading";
      state.errorMessage = null;
    },
    [getSignUp.fulfilled]: (state, action) => {
      state.status = "success";
      console.log(`signupSlice.fulfilled`, action.payload);
      state.user = action.payload;
    },
    [getSignUp.rejected]: (state, action) => {
      state.status = "failed";
      /* console.log(`signupSlice.rejected`, action.payload); */
      state.errorMessage = action.payload;
      state.errorCode = action.payload;
    },
  },
});

export default signupSlice.reducer;
