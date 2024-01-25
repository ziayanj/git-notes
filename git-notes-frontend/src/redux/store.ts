import { configureStore } from '@reduxjs/toolkit';

import gistsSlice from './slices/gistsSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    gists: gistsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
