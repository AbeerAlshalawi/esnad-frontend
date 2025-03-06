/* eslint-disable react/prop-types */
function Button({ type = "button", children, disabled, ...props }) {
  const baseStyles =
    "py-3 px-5 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-offset-2 font-bold text-opacity-90 hover:bg-opacity-80";

  const primaryStyles =
    "bg-primary text-white hover:bg-primary-dark focus:ring-primary-dark";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const styles = `${baseStyles} ${
    primaryStyles
  } ${disabled ? disabledStyles : ""}`;

  return (
    <button type={type} disabled={disabled} className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
