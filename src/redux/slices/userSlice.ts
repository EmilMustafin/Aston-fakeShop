import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    logoutUser: state => {
      state.email = null;
      state.id = null;
    },
  },
});

export const { authUser, logoutUser } = userSlice.actions;
export const user = userSlice.reducer;
