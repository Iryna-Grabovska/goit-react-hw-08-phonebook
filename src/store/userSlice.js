import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  redusers: {
    setUser(state, action) {
      state.name = action.playload.name;
      state.token = action.playload.token;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = null;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
// setUser(state, action) {
//   // state.email = action.playload.email;

// setUser(state, action) {
//   // state.email = action.playload.email;
//   state.user = action.playload.user;
//   state.token = action.playload.token;
//   state.id = action.playload.id;
// },
