import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";

import verified from "../../assets/verified.png";
const Verified = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    localStorage.removeItem("pendingEmail");
    navigate("/login");
  };

  return (
    <AuthLayout showHelp={false}>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-105 flex flex-col items-center text-center gap-6">
        <div className="relative">
          <div className="w-18 h-15">
            <img
              src={verified}
              alt="email-verified"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl text-gray-900 mb-2">
            Email verified !
          </h1>
          <p className="text-sm text-[#5B6871] leading-5">
            The verified email address will be associated with your account.
            Click on the button below to continue.
          </p>
        </div>

        <Button variant="primary" className="w-full" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Verified;
