import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App_1, App_2, App_3 } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App_1 />
    <App_2 />
    <App_3 />
  </StrictMode>
);
