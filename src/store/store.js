import { configureStore } from '@reduxjs/toolkit';
import useReducer from './userSlice';
import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    user: useReducer,
    // contacts: contactsReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});
