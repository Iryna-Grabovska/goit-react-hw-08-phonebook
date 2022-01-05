import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraRedusers: {
    setUser(state, action) {
      state.user = action.playload.user;
      state.token = action.playload.token;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
