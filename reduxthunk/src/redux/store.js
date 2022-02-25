import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as registerState } from "./registeration/reducer";
import { reducer as loginState } from "./Login/reducer";
import { reducer as githubState } from "./Github/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({ registerState, loginState, githubState });

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
