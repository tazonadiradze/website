import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  showPersonal: false,
};
const createAuth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInFunc(state) {
      state.authenticated = true;
      console.log(state.authenticated, "user is alredy authenticated");
    },
    signOutFunc(state) {
      state.authenticated = false;
      state.showPersonal = false;
      localStorage.removeItem("authState");
    },
    showPersonalInfo(state) {
      state.showPersonal = true;
    },
  },
});

export const { signInFunc, signOutFunc, showPersonalInfo } = createAuth.actions;
export default createAuth.reducer;
