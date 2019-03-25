import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Main } from "./components/Main";
import { Provider } from "react-redux";
import App from "./components/App";

//import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
