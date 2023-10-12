import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../counters/userSlice';

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
})