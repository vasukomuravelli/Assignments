import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
} from "./actionTypes";

const init = { loading: false, todos: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return { ...state, error: true };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case UPDATE_TODO_ERROR:
      return { ...state, error: true };
    case REMOVE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== payload),
        loading: false,
      };
    case REMOVE_TODO_ERROR:
      return { ...state, error: true };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
