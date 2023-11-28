import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/types';

interface AuthState {
  user: User | null;
}
const initialState = {
  user: null,
} as AuthState;

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
export const user = userSlice.reducer;
