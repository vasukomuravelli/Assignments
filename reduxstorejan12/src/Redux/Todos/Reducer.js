import {
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  ADD_TODO_LOADING,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_LOADING,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_LOADING,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./ActionTypes";

import { loadData, saveData } from "../../utils/localstorage";

const init = {
  loading: false,
  Todos: loadData("Todos") || [],
  error: false,
};

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      const updatedTodo = [...state.Todos, payload];
      console.log(state.Todos, updatedTodo);
      saveData("Todos", updatedTodo);
      return {
        ...state,
        todos: updatedTodo,
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    case REMOVE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_TODO_SUCCESS:
      const newTodo = state.Todos.filter((todo) => todo.id !== payload);
      saveData("Todos", newTodo);
      return {
        ...state,
        todos: newTodo,
        loading: false,
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      const ToggledTodo = state.Todos.map((todo) =>
        todo.id === payload ? { ...todo, status: !todo.status } : todo
      );
      saveData("Todos", ToggledTodo);
      return {
        ...state,
        todos: ToggledTodo,
        loading: false,
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      const data = loadData("Todos");
      return {
        ...state,
        Todos: data,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
