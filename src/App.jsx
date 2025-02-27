import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home"; 
// import MainSection from "./components/MainSection"; 
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
