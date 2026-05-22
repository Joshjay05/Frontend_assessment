import AuthLayout from "../../components/layout/AuthLayout";
import { NavLink } from "react-router-dom";
import mail from "../../assets/mail.png";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-105">
        <h1 className="font-bold text-2xl leading-tight mb-8">
          Register your account
        </h1>

        <div className="flex flex-col gap-3">
          <button
            className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 hover:bg-[#4399FF]/10 transition-colors cursor-pointer"
            onClick={handleNavigate}
          >
            <img src={mail} alt="Google Logo" className="w-5 h-5" />
            Sign up with email
          </button>

          <div className="flex items-center gap-3 my-1">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 hover:bg-[#4399FF]/10 transition-colors cursor-pointer">
            <img src={google} alt="Google Logo" className="w-5 h-5" />
            Sign up with Google
          </button>
        </div>

        <p className="text-xs text-[#84919A] mt-6 leading-5">
          By clicking the button above, you agree to our{" "}
          <a href="/#" className="text-[#FF8600] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/#" className="text-[#FF8600] hover:underline">
            Privacy Policy.
          </a>
        </p>

        <p className="flex gap-2 text-sm text-gray-500 mt-8">
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

export default Register;
