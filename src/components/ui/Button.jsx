const styles = {
  primary: "px-4 py-2 rounded-md text-white bg-[#FF8600] hover:bg-[#FF8600]/90",
  secondary:
    "px-4 py-2 rounded-md text-gray-900 bg-gray-50 border-[#FF8600] hover:bg-gray-600",
};
const Button = ({
  children,
  onClick,
  type,
  isLoading = false,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${styles[variant]} ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      >
        {isLoading ? "please wait..." : children}
      </button>
    </div>
  );
};

export default Button;
