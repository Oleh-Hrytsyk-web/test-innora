import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
