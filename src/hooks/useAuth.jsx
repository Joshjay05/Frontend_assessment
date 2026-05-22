import { registerUser, resendVerification, verifyOtp } from "../lib/authMock";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (_, variables) => {
      localStorage.setItem("pendingEmail", variables.email);
      toast.success("Account created! Check your email.");
      navigate("/verify-email");
    },
    onError: (error) => {
      toast.error(error.message || "Registration failed");
    },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationKey: ["verifyOtp"],
    mutationFn: async (data) => {
      const response = await verifyOtp(data);
      return response;
    },
  });
};

export const useResendVerification = () => {
  return useMutation({
    mutationKey: ["resendVerification"],
    mutationFn: async (data) => {
      const response = await resendVerification(data);
      return response;
    },
  });
};
