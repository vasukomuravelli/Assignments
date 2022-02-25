import {
  REGISTER_LOADING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initstate = {
  isLoading: false,
  token: "",
  isError: false,
};
export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      console.log("inside reducer", payload);
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
