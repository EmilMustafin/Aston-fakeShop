import { configureStore } from '@reduxjs/toolkit';

import { fakestoreApi } from './api/fakeApi';
import { user } from './slices/userSlice';
export const store = configureStore({
  reducer: {
    auth: user,
    [fakestoreApi.reducerPath]: fakestoreApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakestoreApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
