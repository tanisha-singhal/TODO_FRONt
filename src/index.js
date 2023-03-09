import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.render(
  <GoogleOAuthProvider clientId="939470302591-2voul7j4hudfbiqmq9c7uqk9r8p07kal.apps.googleusercontent.com">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
