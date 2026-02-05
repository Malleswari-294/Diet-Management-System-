import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/register" element={<h2>Register Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
