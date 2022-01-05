import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import contactsReducer from './contactsSlice';

import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // contacts: contactsReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});
