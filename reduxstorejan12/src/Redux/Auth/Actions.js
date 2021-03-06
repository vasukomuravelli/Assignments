import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./ActionTypes";

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginFailure = (err) => {
  return { type: LOGIN_FAILURE, payload: err };
};
