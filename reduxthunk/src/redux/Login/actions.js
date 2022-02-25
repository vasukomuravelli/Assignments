import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};
