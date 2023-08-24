import { createSlice } from "@reduxjs/toolkit";
import { user_local_auth } from "../config/global";

const initialState = {
  isAuthenticated: false,
  user: null,
  msg_history: 0,
  message: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem(user_local_auth, JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem(user_local_auth);
    },
    messages: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { login, logout, messages } = authSlice.actions;
export default authSlice.reducer;
