/* eslint-disable react/prop-types */

import React from "react";

const Input = React.forwardRef(
  ({ type, id, placeholder, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
