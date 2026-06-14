import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./context/itemProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ItemProvider>
        <App />
      </ItemProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
