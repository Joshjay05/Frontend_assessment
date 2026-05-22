// import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth_screens/Register";
import RegisterationForm from "../pages/auth_screens/RegistrationForm";
import VerifyEmail from "../pages/auth_screens/VerifyEmail";
import OTPVerification from "../pages/auth_screens/OTPVerififcation";
import Verified from "../pages/auth_screens/Verified";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashbord from "../pages/dashboard/Dashbord";
import ChatPage from "../pages/chat/ChatPage";
import Login from "../pages/auth_screens/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/register" element={<RegisterationForm />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashbord />} />
        <Route path="group" element={<div>My Group</div>} />
        <Route path="messages" element={<ChatPage />} />
        <Route path="analytics" element={<div>Analytics</div>} />
        <Route path="pack" element={<div>Pack</div>} />
        <Route path="settings" element={<div>Settings</div>} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
