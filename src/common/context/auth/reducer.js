import * as React from 'react';

export const AUTH_ACTION_TYPE = {
  LOGGED_IN: 'logged_in',
  LOGOUT: 'logout',
};

export const ContextAuth = React.createContext();

export const initialAuthState = {
  user: {
    nickname: '',
    login: '',
  },
  token: '',
  isLoggedIn: false,
};

export const clearAuthData = () => {
  return {
    type: AUTH_ACTION_TYPE.LOGOUT,
    payload: initialAuthState,
  };
};

export const authReducer = (state, action) => {
  console.log('authreducer');
  return { ...state, ...action.payload };
};
