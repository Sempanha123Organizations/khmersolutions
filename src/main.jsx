import ReactDom from "react-dom/client";
import React from "react";
import App  from "./App.jsx";
import { BrowserRouter } from 'react-router-dom';

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
        <App />
    </BrowserRouter>

  </React.StrictMode>
);
