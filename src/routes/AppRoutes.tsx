// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../features/auth/pages/SignUp";
import Login from "../features/auth/pages/Login";
import DEM01 from "../features/learning/pages/DifferenceExtractionMethod/DEM01";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dem01" element={<DEM01 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
