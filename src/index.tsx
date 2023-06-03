import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import rootReducer from "./redux";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = legacy_createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* BrowserRouter를 쓰면 새로고침시 404 에러가 뜬다 */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
