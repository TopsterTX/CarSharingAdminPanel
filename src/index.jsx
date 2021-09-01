import React from "react";
import ReactDOM from "react-dom";
import { loadState, saveState } from "./local_storage/localStorage";
import "./index.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { userRefreshAuthorize } from "./redux/actions/user/user";
import { APP_ID } from "./constants";
import { Loader } from "./components/UI/Loader/Loader";
import api from "./axios/axios";
import { showError, getStatus } from "./redux/actions/error/error";

// const defaultState = loadState();
const defaultState = {};

const store = configureStore(defaultState);
// store.subscribe(() => {
//   saveState(store.getState());
// });

store.subscribe(() => {
  api.interceptors.request.use((config) => {
    if (store.getState().user.accessToken) {
      config.headers.Authorization = `Bearer ${
        store.getState().user.accessToken
      }`;
    }

    config.headers["X-Api-Factory-Application-Id"] = APP_ID;
    return config;
  });
});

store.subscribe(() =>
  api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      if (error.response.status == 401) {
        await store.dispatch(
          userRefreshAuthorize(
            store.getState().user.refreshToken,
            store.getState().user.basicKey
          )
        );
      }
      if (error.response.status >= 500) {
        store.dispatch(getStatus(error.response.status));
        store.dispatch(showError(true));
      }
    }
  )
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Loader />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
