import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = (defaultState = {}) => {
  return createStore(
    combineReducers({ ...rootReducer }),
    defaultState,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
