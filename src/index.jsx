import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { mobileViewport } from "./mobileViewportOption";
import { App } from "./App";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
mobileViewport();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
