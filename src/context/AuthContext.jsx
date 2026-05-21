/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { getToken } from "../lib/apiClient";
const AuthContext = createContext(null);
import { loginUser } from "../lib/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => getToken());
  const isAuthenticated = !!token;
  const login = useCallback(async (email, password, rememberMe = false) => {
    const data = await loginUser({ email, password });
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be inside AuthProvider");
  return ctx;
};
