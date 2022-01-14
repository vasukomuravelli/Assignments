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
  EDIT_TODO_SUCCESS,
} from "./actionTypes";

const init = { loading: false, todos: [], error: false };

export const reducer = (state = init, { type, payload }) => {
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
      let updatedStatus = !state.todos.filter((e) => e.id === payload)[0]
        .status;
      console.log(
        state.todos.filter((e) => e.id === payload)[0].status,
        updatedStatus,
        "success"
      );
      fetch(`http://localhost:3001/todos/${payload}`, {
        method: "PATCH",
        body: JSON.stringify({ status: updatedStatus }),
        headers: { "content-Type": "application/json" },
      });
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload ? { ...e, status: !e.status } : e
        ),
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
      fetch(`http://localhost:3001/todos/${payload}`, {
        method: "DELETE",
      });
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
    case EDIT_TODO_SUCCESS:
      console.log(payload);
      fetch(`http://localhost:3001/todos/${payload.id}`, {
        method: "PATCH",
        body: JSON.stringify({ title: payload.text }),
        headers: { "content-Type": "application/json" },
      });
      return {
        ...state,
        todos: state.todos.map((e) =>
          e.id === payload.id ? { ...e, title: payload.text } : e
        ),
        loading: false,
      };
    default:
      return state;
  }
};
