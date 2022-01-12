import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduXProvider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ReduXProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduXProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
