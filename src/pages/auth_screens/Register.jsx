import { Mail, MessageCircleCheck } from "lucide-react";
import AuthLayout from "../../components/layout/AuthLayout";
import { NavLink } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
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
            className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={handleNavigate}
          >
            <Mail className="w-5 h-5 text-gray-800" />
            Sign up with email
          </button>

          <div className="flex items-center gap-3 my-1">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            {/* <FcGoogle /> */}
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
      <div className="absolute bottom-0 left-0 w-full h-full  from-[#F8FAFC] to-[#F8FAFC]/0 pointer-events-none" />
      <p className="fixed bg-[#FF8600] bottom-0.5 right-10 z-50 shadow-lg rounded-full px-2 py-2 text-white flex items-center gap-2 cursor-pointer hover:bg-[#FF8600]/90 transition-colors">
        Get Help
        <span>
          <MessageCircleCheck className="w-4 h-4" />
        </span>
      </p>
    </AuthLayout>
  );
};

export default Register;
