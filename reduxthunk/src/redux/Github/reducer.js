import { GETUSER } from "./actionTypes";

const initialState = {
  data: {},
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER:
      console.log("inside reducer", payload);
      return { ...state, data: payload };
    default:
      return state;
  }
};
