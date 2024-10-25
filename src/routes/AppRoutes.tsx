// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../features/auth/pages/SignUp";
import Login from "../features/auth/pages/Login";
import Step01LFD from "../features/learning/pages/LinguisticAndFormalDifferentialExaminationMethods/Step01LFD";
import Step02LFD from "../features/learning/pages/LinguisticAndFormalDifferentialExaminationMethods/Step02LFD";
import Step03LFD from "../features/learning/pages/LinguisticAndFormalDifferentialExaminationMethods/Step03LFD";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lfd01" element={<Step01LFD />} />
        <Route path="/lfd02" element={<Step02LFD />} />
        <Route path="/lfd03" element={<Step03LFD />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
