import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, EDIT_TODO } from "./actionTypes";

const initialState = [];
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case REMOVE_TODO:
      return state.filter((e) => e.id !== payload);
    case UPDATE_TODO:
      return state.map((e) => {
        return e.id === payload ? { ...e, status: !e.status } : e;
      });
    case EDIT_TODO:
      return state.map((e) => {
        return e.id === payload.id ? { ...e, title: payload.title } : e;
      });
    default:
      return state;
  }
};
