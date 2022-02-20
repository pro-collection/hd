import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "@/pages/Home";

import { Route, Routes, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
