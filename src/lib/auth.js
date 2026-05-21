import { apiClient } from "./apiClient";

export const registerUser = async (data) => {
  const response = await apiClient("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const loginUser = async (data) => {
  const response = await apiClient("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};
export const verifyOtp = async (data) => {
  const response = await apiClient("/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const resendVerification = async (data) => {
  const response = await apiClient("/resend-verification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  window.location.href = "/login";
};
