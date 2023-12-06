// Import necessary modules
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/sb-admin-2.min.css";

// Render the app within Router and DarkModeProvider
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
