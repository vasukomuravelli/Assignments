import {
  REGISTER_LOADING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "./actionTypes";

export const registerLoading = () => {
  return {
    type: REGISTER_LOADING,
  };
};

export const registerSuccess = (token) => {
  return {
    type: REGISTER_SUCCESS,
    payload: token,
  };
};

export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    payload: error,
  };
};
