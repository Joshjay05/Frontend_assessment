import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Check, Info } from "lucide-react";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { FormField } from "../../components/ui/Field";

const PASSWORD_MAX = 15;
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const RegisterationForm = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [focused, setFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const set = (key, val) => setFields((p) => ({ ...p, [key]: val }));
  const focus = (key) => setFocused((p) => ({ ...p, [key]: true }));
  const blur = (key) => setFocused((p) => ({ ...p, [key]: false }));

  const emailValid = isValidEmail(fields.email);
  const canSubmit =
    fields.firstName && fields.lastName && emailValid && fields.password;

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-[420px]">
        <h1 className="font-bold text-2xl text-gray-900">
          Register your account
        </h1>
        <p className="text-sm text-gray-400 mt-1 mb-6">
          Proceed to create account and setup your organization
        </p>

        <div className="flex gap-3 mb-4">
          <FormField
            className="flex-1"
            label="First Name"
            placeholder="Seyi"
            value={fields.firstName}
            focused={focused.firstName}
            hasValue={!!fields.firstName}
            leftIcon={<User className="w-4 h-4" />}
            onChange={(e) => set("firstName", e.target.value)}
            onFocus={() => focus("firstName")}
            onBlur={() => blur("firstName")}
          />
          <FormField
            className="flex-1"
            label="Last Name"
            placeholder="Ajayi"
            value={fields.lastName}
            focused={focused.lastName}
            hasValue={!!fields.lastName}
            leftIcon={<User className="w-4 h-4" />}
            onChange={(e) => set("lastName", e.target.value)}
            onFocus={() => focus("lastName")}
            onBlur={() => blur("lastName")}
          />
        </div>

        <FormField
          className="mb-4"
          label="Email"
          labelExtra={<Info className="w-3 h-3 text-gray-300" />}
          type="email"
          placeholder="seyi@zojatech.com"
          value={fields.email}
          focused={focused.email}
          hasValue={!!fields.email}
          leftIcon={<Mail className="w-4 h-4" />}
          rightIcon={
            emailValid ? <Check className="w-4 h-4 text-emerald-500" /> : null
          }
          onChange={(e) => set("email", e.target.value)}
          onFocus={() => focus("email")}
          onBlur={() => blur("email")}
        />

        <div className="mb-5">
          <FormField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={fields.password}
            maxLength={PASSWORD_MAX}
            focused={focused.password}
            hasValue={!!fields.password}
            leftIcon={<Lock className="w-4 h-4" />}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-gray-300 hover:text-gray-500 transition-colors"
              >
                {showPassword ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
              </button>
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

        <button
          disabled={!canSubmit}
          className={`w-full py-3 rounded-lg text-sm font-semibold transition-opacity text-white
            ${canSubmit ? "bg-[#FF8600] hover:opacity-90" : "bg-[#FF8600]/40 cursor-not-allowed"}`}
        >
          Create account
        </button>

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
          Already have an account?
          <NavLink
            to="/login"
            className="text-[#FF8600] font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterationForm;
