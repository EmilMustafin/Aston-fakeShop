import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { fakestoreApi } from './api/fakeApi';
import { user } from './slices/userSlice';

export const rootReducer = combineReducers({
  auth: user,
  [fakestoreApi.reducerPath]: fakestoreApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakestoreApi.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
