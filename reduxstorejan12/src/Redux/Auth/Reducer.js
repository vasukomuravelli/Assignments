import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./ActionTypes";

const auth = localStorage.getItem("Auth");

const init = { isAuth: auth || false, token: "" };

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("Auth", true);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    default:
      return state;
  }
};
