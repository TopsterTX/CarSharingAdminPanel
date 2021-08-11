import React from "react";
import ReactDOM from "react-dom";
import { loadState, saveState } from "./local_storage/localStorage";
import "./index.scss";
import { mobileViewport } from "./mobileViewportOption";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { userRefreshAuthorize } from "./redux/actions/user/user";
import api from "./axios/axios";

const defaultState = loadState();
// const defaultState = {};

const store = configureStore(defaultState);
store.subscribe(() => {
  saveState(store.getState());
});

store.subscribe(() =>
  api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      if (error.response.status == 401) {
        const response = await store.dispatch(
          userRefreshAuthorize(
            store.getState().user.refreshToken,
            store.getState().user.basicKey
          )
        );
      }
    }
  )
);

mobileViewport();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
