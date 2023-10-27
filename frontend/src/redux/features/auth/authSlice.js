import { createSlice } from "@reduxjs/toolkit";

const username = JSON.parse(localStorage.getItem("username"));

const initialState = {
  isLoggedIn: false,
  username: username ? username : "",
  user: {
    name: "",
    email: "",
    phone: "",
    bio: "",
    photo: "",
  },
};

// Create a slice using createSlice
const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define reducers and actions here
   SET_LOGIN(state,action){
    state.isLoggedIn = action.payload;
   },
   SET_NAME(state,action){
    localStorage.setItem("username",JSON.stringify(action.payload));
    state.username = action.payload;
   },
   SET_USER(state,action){
    const profile = action.payload;
    state.user.username=profile.username;
    state.user.email=profile.email;
    state.user.phone=profile.phone;
    state.user.bio=profile.bio;
    state.user.photo=profile.photo;
   }
  },
});

// Export the reducer and actions
export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

// Export the reducer itself

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.username;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;