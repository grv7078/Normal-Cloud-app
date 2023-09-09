import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global
        styles={css`
          body {
            font-family: "Inter", Arial, Helvetica, sans-serif;
            margin: 0;
          },
        `}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
