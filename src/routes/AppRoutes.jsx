// import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth_screens/Register";
import RegisterationForm from "../pages/auth_screens/RegistrationForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/register" element={<RegisterationForm />} />
    </Routes>
  );
};

export default AppRoutes;
