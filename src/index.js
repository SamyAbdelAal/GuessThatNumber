import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, combineReducers } from "redux"; //STEP 1
import { Provider } from "react-redux"; // STEP 2
import { compose } from "redux";
import getRandNumReducer from "./store/reducers/RandNumReducer"; //STEP 2
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  rootNum: getRandNumReducer
});

const store = createStore(rootReducer, composeEnhancers()); //STEP 4
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
