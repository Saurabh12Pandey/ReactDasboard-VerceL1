import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

createRoot(document.getElementById("root")).render(
  <>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </>,
  
);