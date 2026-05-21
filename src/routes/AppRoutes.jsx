// import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth_screens/Register";
import RegisterationForm from "../pages/auth_screens/RegistrationForm";
import VerifyEmail from "../pages/auth_screens/VerifyEmail";
import OTPVerification from "../pages/auth_screens/OTPVerififcation";
import Verified from "../pages/auth_screens/Verified";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
      <Route path="/verified" element={<Verified />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default AppRoutes;
