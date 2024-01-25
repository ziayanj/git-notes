import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import type { UserType } from '../../types/user.type';
import { userGistsLoaded } from './gistsSlice';

import { authenticateGithubLogin } from '../../services/authService';

type AuthState = {
  isLoggedIn: boolean,
  user: UserType | null,
};

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn") || false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : undefined,
};

export const loginUser = (code: string) => async (dispatch: Dispatch) => {
  try {
    const response = await authenticateGithubLogin(code);

    if (response) {
      dispatch(githubLogin(response));
    } else {
      dispatch(githubLogout());
    }
  } catch(e) {
    console.error(e);
  }
};

export const logoutUser = () => async(dispatch: Dispatch) => {
  dispatch(githubLogout());
  dispatch(userGistsLoaded([]));
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    githubLogin: (state, action) => {
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    githubLogout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { githubLogin, githubLogout } = authSlice.actions;

export default authSlice.reducer;
