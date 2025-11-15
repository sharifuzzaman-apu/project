import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import SuccessPage from "./pages/SuccessPage";
import OtpPage from "./pages/OtpPage";
export default function App() {
  return (
    <div className="w-full h-full ">
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
