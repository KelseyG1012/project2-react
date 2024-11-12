import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Fugitives from "./pages/Fugitives";
import Missing from "./pages/Missing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fugitives" element={<Fugitives />} />
        <Route path="/missing" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
