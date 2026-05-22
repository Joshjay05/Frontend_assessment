import { Check, MessageCircleCheck } from "lucide-react";
import logo from "../../assets/logo.png";
const AuthLayout = ({ children, showHelp = true }) => {
  return (
    <main className="lg:flex h-screen overflow-hidden">
      <aside className="hidden sm:fixed top-0 left-0 w-1/2 h-screen lg:flex flex-col px-16 py-12 border-r border-gray-100 bg-white pl-28">
        <div
          className="flex items-center gap-2 w-30 h-9 top-22.25 left-28.5
        `"
        >
          <img src={logo} alt="logo" />
        </div>

        <article className="flex flex-col justify-center flex-1 max-w-[488.44px]">
          {[
            "Track real-time overview of company's financial performance.",
            "Track created projects budget against actual revenue and expenses.",
            "Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-10">
              <span className="mt-0.5 bg-[#FF8600] rounded-full p-1 text-white shrink-0">
                <Check className="w-4 h-4" />
              </span>

              <p className="text-base leading-6 font-normal text-[#5B6871]">
                {item}
              </p>
            </div>
          ))}

          <p className="mt-20 text-[#84919A] text-xs">
            &copy;
            {new Date().getFullYear()}
            Revvex. All rights reserved
          </p>
        </article>
      </aside>

      <article className="lg:ml-[50%] lg:w-1/2 h-screen overflow-y-auto bg-[#F8FAFC]">
        <div
          className="lg:hidden flex items-center justify-center mt-12 mx-auto gap-2 w-30 h-9 top-22.25 left-28.5
        "
        >
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="min-h-[140vh] flex flex-col items-center px-10 lg:py-16">
          <div className="w-full flex justify-center pt-20">{children}</div>

          <div className="flex-1" />

          {showHelp && (
            <div className="w-full flex justify-end pb-10">
              <button className="bg-[#FF8600] shadow-lg rounded-full px-4 py-3 text-white flex items-center gap-2 hover:bg-[#FF8600]/90 transition-colors">
                Get Help
                <MessageCircleCheck className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default AuthLayout;
