import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { FormField } from "../../components/ui/Field";
import { useAuthContext } from "../../context/AuthContext";

const EMAIL_MAX = 60;
const PASSWORD_MAX = 15;
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [focused, setFocused] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const set = (key, val) => setFields((p) => ({ ...p, [key]: val }));
  const focus = (key) => setFocused((p) => ({ ...p, [key]: true }));
  const blur = (key) => setFocused((p) => ({ ...p, [key]: false }));

  const emailValid = isValidEmail(fields.email);
  const canSubmit = emailValid && fields.password.length > 0;
  const isPasswordActive = focused.password || fields.password.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError("");
    setIsPending(true);
    try {
      await login(fields.email, fields.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-[420px]">
        <h1 className="font-bold text-2xl text-gray-900">
          Log in to your account
        </h1>
        <p className="text-sm text-[#5B6871] mt-1 mb-6">
          Proceed to create account and setup your organization
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-3"
        >
          <div>
            <FormField
              label="Email"
              type="email"
              placeholder="Email"
              value={fields.email}
              maxLength={EMAIL_MAX}
              focused={focused.email}
              hasValue={!!fields.email}
              leftIcon={<Mail className="w-5 h-5" />}
              onChange={(e) => set("email", e.target.value)}
              onFocus={() => focus("email")}
              onBlur={() => blur("email")}
            />
            {fields.email && (
              <p className="text-[11px] text-gray-400 text-right mt-1">
                {fields.email.length} / {EMAIL_MAX}
              </p>
            )}
          </div>

          <div>
            <FormField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={fields.password}
              maxLength={PASSWORD_MAX}
              focused={focused.password}
              hasValue={!!fields.password}
              leftIcon={<Lock className="w-5 h-5" />}
              rightIcon={
                isPasswordActive ? (
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-gray-300 hover:text-gray-500 transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeOff className="w-5 h-5" />
                    )}
                  </button>
                ) : null
              }
              onChange={(e) => set("password", e.target.value)}
              onFocus={() => focus("password")}
              onBlur={() => blur("password")}
            />
            {fields.password && (
              <p className="text-[11px] text-gray-400 text-right mt-1">
                {fields.password.length} / {PASSWORD_MAX}
              </p>
            )}
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={!canSubmit || isPending}
            className={`w-full py-3 rounded-lg text-sm font-semibold transition-opacity text-white mt-1
              ${
                canSubmit && !isPending
                  ? "bg-[#FF8600] hover:opacity-90"
                  : "bg-[#ECEDED] text-gray-400 cursor-not-allowed"
              }`}
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 leading-5">
          By clicking the button above, you agree to our{" "}
          <a href="/#" className="text-[#FF8600] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/#" className="text-[#FF8600] hover:underline">
            Privacy Policy.
          </a>
        </p>

        <p className="flex gap-2 text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-[#FF8600] font-medium hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
