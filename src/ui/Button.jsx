/* eslint-disable react/prop-types */
function Button({ type = "button", children, disabled, ...props }) {
  const baseStyles =
    "py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

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
