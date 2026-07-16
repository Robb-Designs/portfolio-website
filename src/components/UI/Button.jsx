const btnVariants = {
  primary: "bg-olive-500 text-white hover:bg-olive-700",
  secondary: "border border-olive-500 text-olive-700 hover:bg-olive-100",
  ghost: "text-olive-700 hover:bg-olive-100",
};

function Button({ variant = "primary", children, className = "", ...props }) {
  return (
    <button
      className={` rounded-full px-6 py-3 font-medium transition-colors duration-300
        ${btnVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
