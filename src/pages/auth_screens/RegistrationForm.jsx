import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Check,
  Info,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { FormField } from "../../components/ui/Field";
import { useRegister } from "../../hooks/useAuth";

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

  const isPasswordActive = focused.password || fields.password.length > 0;

  const { mutate: register, isPending } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    register({
      first_name: fields.firstName,
      last_name: fields.lastName,
      email: fields.email,
      password: fields.password,
    });
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-122 h-143">
        <h1 className="font-bold text-2xl text-gray-900">
          Register your account
        </h1>
        <p className="text-sm text-[#5B6871] font-normal leading-4.75 mt-1 mb-6">
          Proceed to create account and setup your organization
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-3 mb-4 items-end">
            <FormField
              className="flex-1"
              label="First Name"
              placeholder="First Name"
              value={fields.firstName}
              focused={focused.firstName}
              hasValue={!!fields.firstName}
              leftIcon={<User className="w-6 h-6 text-[#B0BABF]" />}
              onChange={(e) => set("firstName", e.target.value)}
              onFocus={() => focus("firstName")}
              onBlur={() => blur("firstName")}
            />
            <FormField
              className="flex-1"
              label="Last Name"
              placeholder="Last Name"
              value={fields.lastName}
              focused={focused.lastName}
              hasValue={!!fields.lastName}
              leftIcon={<User className="w-6 h-6 text-[#B0BABF]" />}
              onChange={(e) => set("lastName", e.target.value)}
              onFocus={() => focus("lastName")}
              onBlur={() => blur("lastName")}
            />
          </div>

          <FormField
            className="mb-4"
            label="Email"
            additionalLabel={<Info className="w-4 h-4 text-gray-300" />}
            type="email"
            placeholder="work mail"
            value={fields.email}
            focused={focused.email}
            hasValue={!!fields.email}
            leftIcon={<Mail className="w-6 h-6 text-[#B0BABF]" />}
            rightIcon={
              emailValid ? <Check className="w-6 h-6 text-green-800 " /> : null
            }
            onChange={(e) => set("email", e.target.value)}
            onFocus={() => focus("email")}
            onBlur={() => blur("email")}
          />

          <div className="mb-5">
            <FormField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={fields.password}
              maxLength={PASSWORD_MAX}
              focused={focused.password}
              hasValue={!!fields.password}
              leftIcon={
                !showPassword ? (
                  <Unlock className="w-6 h-6 text-[#B0BABF]" />
                ) : (
                  <Lock className="w-6 h-6 text-[#B0BABF]" />
                )
              }
              rightIcon={
                isPasswordActive ? (
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-gray-300 hover:text-gray-500 transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-6 h-6" />
                    ) : (
                      <EyeOff className="w-6 h-6" />
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

          <button
            type="submit"
            disabled={!canSubmit || isPending}
            className={`w-full py-3 rounded-lg text-sm font-semibold transition-opacity text-white
      ${
        canSubmit && !isPending
          ? "bg-[#FF8600] hover:opacity-90"
          : "bg-[#ECEDED] cursor-not-allowed"
      }`}
          >
            {isPending ? "Creating account..." : "Create account"}
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
