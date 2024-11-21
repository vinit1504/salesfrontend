/* eslint-disable no-unused-vars */
import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js"; // Import your Redux store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true, 
          v7_relativeSplatPath: true, 
        }}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
