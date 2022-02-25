import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionTypes";

const initstate = {
  isLoading: false,
  token: "",
  isError: false,
};
export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      console.log("inside reducer", payload);
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
