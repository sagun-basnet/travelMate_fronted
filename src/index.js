import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { BookingProvider } from './context/bookingContex';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BookingProvider>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </BookingProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
