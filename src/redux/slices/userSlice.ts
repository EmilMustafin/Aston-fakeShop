import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase.config';
import { IUser } from '../../types/type';
import { RootState } from '../store';

type InitialState = {
  authorize: boolean;
  user: IUser | null;
};

const initialState: InitialState = {
  authorize: auth ? true : false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: state => {
      state.user = null;
    },
  },
});

export const { setCurrentUser, logoutUser } = userSlice.actions;
export const selectAuthInfo = (state: RootState): InitialState => state.auth;
export const selectAuthStatus = (state: RootState): boolean => state.auth.authorize;
export const selectAuthUser = (state: RootState): IUser | null => state.auth.user;
export const user = userSlice.reducer;
