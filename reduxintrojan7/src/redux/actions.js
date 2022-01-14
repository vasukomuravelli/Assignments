import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, EDIT_TODO } from "./actionTypes";

export const addTodo = (data) => {
  return { type: ADD_TODO, payload: data };
};

export const removeTodo = (data) => {
  return { type: REMOVE_TODO, payload: data };
};

export const updateTodo = (data) => {
  return { type: UPDATE_TODO, payload: data };
};

export const editTodo = (data) => {
  return { type: EDIT_TODO, payload: data };
};
