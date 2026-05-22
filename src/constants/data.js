const MOCK_USER = {
  first_name: "Jesulona",
  last_name: "Odelade",
  email: "jesulonaOdelade@yopmail.com",
  password: "securePass123",
};

export const mockRegister = async (data) => {
  await new Promise((r) => setTimeout(r, 500));
  localStorage.setItem("pendingEmail", data.email);
  return { message: "Registration successful" };
};

export const mockVerifyOtp = async ({ code }) => {
  await new Promise((r) => setTimeout(r, 500));
  if (code !== "1234") throw new Error("Invalid OTP code");
  return { message: "Email verified" };
};

export const mockResendOtp = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return { message: "Code resent" };
};

export const mockLogin = async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 500));
  if (password !== MOCK_USER.password) throw new Error("Invalid credentials");
  if (email !== MOCK_USER.email) throw new Error("User not found");
  return { token: "test-token-asdf;ljk", user: MOCK_USER };
};
