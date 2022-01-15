import { Reducer as TodosReducer } from "./Todos/Reducer";
import { Reducer as AuthReducer } from "./Auth/Reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  TodoState: TodosReducer,
  AuthState: AuthReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
