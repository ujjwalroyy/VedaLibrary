import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/context/AppContext";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContextProvider>
);
