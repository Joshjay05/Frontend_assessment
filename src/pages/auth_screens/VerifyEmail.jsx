import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";

import sent from "../../assets/sent-email.png";
const VerifyEmail = () => {
  const email = localStorage.getItem("pendingEmail");
  const navigate = useNavigate();

  return (
    <AuthLayout showHelp={false}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-105 flex flex-col items-center text-center gap-4">
        <div className="w-30 h-30">
          <img
            src={sent}
            alt="email-sent"
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">
            Check your mailbox!
          </h1>
          <p className="text-sm text-[#5B6871] leading-6 text-center max-w-77">
            We've sent an email to{" "}
            <span className="font-medium text-gray-800">{email}</span> with an
            OTP to confirm your account. Check your inbox to activate your
            account.
          </p>
        </div>

        <Button
          variant="primary"
          className="w-full"
          onClick={() => navigate("/verify-otp")}
        >
          Confirm Email
        </Button>

        <p className="text-sm text-gray-400 my-4">
          Didn't get the mail?{" "}
          <button
            type="button"
            onClick={() => navigate("/verify-otp")}
            className="text-[#FF8600] outline-none border-none"
          >
            Resend
          </button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
