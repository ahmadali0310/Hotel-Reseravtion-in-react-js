import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import allDataReducer from "./store/allDataReducer";
import { Provider } from "react-redux";
const store = createStore(
  allDataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
