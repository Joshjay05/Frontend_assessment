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
      <div className={`flex flex-col gap-1 ${className}`}>
        <div className="min-h-6">
          {label && (
            <label
              className={`
        text-xs flex items-center gap-1 transition-all duration-200
        ${isActive ? "opacity-100 text-[#5B6871]" : "opacity-0 text-sm leading-6"}
      `}
            >
              {label}
              {additionalLabel}
            </label>
          )}
        </div>

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
            <span
              className={`shrink-0 transition-colors text-[#B0BABF] h-6 w-6}`}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            className="w-full text-sm outline-none bg-transparent text-gray-700 placeholder:text-[#5B6871] placeholder:text-sm font-normal leading-6"
            {...inputProps}
          />

          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </div>

        {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      </div>
    );
  },
);

FormField.displayName = "FormField";
