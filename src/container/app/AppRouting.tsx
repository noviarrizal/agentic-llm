import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPages";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouting;
