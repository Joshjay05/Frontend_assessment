import { forwardRef } from "react";

export const FormField = forwardRef(
  (
    {
      label,
      labelExtra,
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
        {label && (
          <label className="text-xs text-gray-500 flex items-center gap-1">
            {label}
            {labelExtra}
          </label>
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
            <span
              className={`shrink-0 transition-colors ${isActive ? "text-[#FF8600]" : "text-gray-300"}`}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            className="w-full text-sm outline-none bg-transparent text-gray-700 placeholder:text-gray-300"
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
