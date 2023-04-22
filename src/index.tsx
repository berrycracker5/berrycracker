import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import rootReducer from "./redux";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const store = legacy_createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/berrycracker">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);