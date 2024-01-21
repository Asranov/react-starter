import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.css";
import "./locales/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
