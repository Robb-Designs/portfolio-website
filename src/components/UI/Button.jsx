import btnVariants from "./buttonVariants.js";

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
