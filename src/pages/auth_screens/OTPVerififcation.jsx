import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";
import OTPInput from "../../components/ui/OTPInput";
import { useVerifyOtp, useResendVerification } from "../../hooks/useAuth";

const OTPVerification = () => {
  const [code, setCode] = useState("");

  const email = localStorage.getItem("pendingEmail");
  const navigate = useNavigate();

  const { mutate: verify, isPending, error: verifyError } = useVerifyOtp();
  const {
    mutate: resend,
    isPending: isResending,
    isSuccess: resendSuccess,
  } = useResendVerification();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length < 4) return;
    verify(
      { code },
      {
        onSuccess: () => navigate("/verified"),
      },
    );
  };

  const handleResend = () => resend({ email });

  const errMessage = verifyError?.message;

  return (
    <AuthLayout showHelp={false}>
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-10 sm:p-12 w-full max-w-110 h-full max-h-106 sm:h-auto flex flex-col items-start text-left gap-6">
        <h1 className="font-bold text-[28px] text-gray-900 mb-2">
          Verify your email
        </h1>
        <p className="text-[15px] text-[#5B6871] mb-3 leading-relaxed">
          A four digit OTP code has been sent to your email <br />
          <span className="text-[#FF8600]">{email}</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start"
          noValidate
        >
          <div className="mb-8 w-full">
            <OTPInput value={code} onChange={setCode} disabled={isPending} />

            {errMessage && (
              <p className="text-sm text-red-500 mt-3">{errMessage}</p>
            )}
            {resendSuccess && (
              <p className="text-sm text-emerald-600 mt-3">
                A new code has been sent to your email.
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-55 h-12 bg-[#FF8600] hover:bg-[#e67900] text-white rounded-lg font-medium text-[15px] transition-colors  disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={code.length < 4 || isPending}
          >
            {isPending ? "Verifying..." : "Confirm code"}
          </Button>

          <p className="text-[15px] text-[#5B6871] my-4">
            Didn't get the mail?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-[#FF8600] font-medium hover:underline disabled:opacity-50"
            >
              {isResending ? "Sending..." : "Resend"}
            </button>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default OTPVerification;
