import { forwardRef } from "react";

export const FormField = forwardRef(
  (
    {
      label,
      additionalLabel,
      leftIcon,
      rightIcon,
      focused,
      hasValue,
      error,
      className = "",
      ...inputProps
    },
    ref,
  ) => {
    const isActive = focused || hasValue;

    return (
      <div className={`flex flex-col ${className}`}>
        {/* Dynamic Label Wrapper: Completely collapses to 0px height when inactive */}
        {label && (
          <div
            className={`grid transition-all duration-200 ease-out ${
              isActive
                ? "grid-rows-[1fr] opacity-100 mb-1"
                : "grid-rows-[0fr] opacity-0 mb-0"
            }`}
          >
            <div className="overflow-hidden min-h-0 text-xs text-[#5B6871] font-medium flex items-center gap-1">
              <span
                className={`transition-transform duration-200 inline-block ${
                  isActive ? "translate-y-0" : "translate-y-2"
                }`}
              >
                {label}
              </span>
              {additionalLabel}
            </div>
          </div>
        )}

        <div
          className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 transition-all duration-150
          ${
            error
              ? "border-red-400 ring-1 ring-red-400/20"
              : isActive
                ? "border-[#FF8600] ring-1 ring-[#FF8600]/20"
                : "border-gray-200"
          }`}
        >
          {leftIcon && (
            <span className="shrink-0 text-[#B0BABF] h-6 w-6 flex items-center justify-center">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            className="w-full text-sm outline-none bg-transparent text-gray-700 placeholder:text-[#5B6871] placeholder:text-sm font-normal leading-6"
            {...inputProps}
          />

          {rightIcon && (
            <span className="shrink-0 flex items-center justify-center">
              {rightIcon}
            </span>
          )}
        </div>

        {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      </div>
    );
  },
);

FormField.displayName = "FormField";
