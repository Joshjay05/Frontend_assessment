import { useRef, useState } from "react";

const OTPInput = ({ value, onChange, disabled }) => {
  const inputs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const digits = value.split("").concat(Array(4).fill("")).slice(0, 4);

  const handleChange = (e, index) => {
    const char = e.target.value.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    onChange(newDigits.join(""));
    if (char && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const newDigits = [...digits];
        newDigits[index] = "";
        onChange(newDigits.join(""));
      } else if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);
    onChange(pasted.padEnd(4, "").slice(0, 4));
    inputs.current[Math.min(pasted.length, 3)]?.focus();
  };

  return (
    <div className="flex gap-4" onPaste={handlePaste}>
      {digits.map((digit, i) => {
        const isActive = focusedIndex === i || !!digit;
        return (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            value={digit}
            maxLength={1}
            inputMode="numeric"
            disabled={disabled}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onFocus={() => setFocusedIndex(i)}
            onBlur={() => setFocusedIndex(null)}
            className={`
             w-16 h-16 text-center text-2xl font-bold text-gray-700
              transition-all duration-150
              disabled:opacity-50 disabled:cursor-not-allowed
               border rounded-xl outline-none focus:border-[#FF8600] focus:ring-1 focus:ring-[#FF8600] transition-al
              ${
                isActive
                  ? "border-[#FF8600] ring-1 ring-[#FF8600]/20"
                  : "border-gray-200"
              }
            `}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
