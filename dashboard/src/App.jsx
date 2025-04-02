import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  );
};

export default App;