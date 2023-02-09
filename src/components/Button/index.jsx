import React from "react";

const Button = ({ children, disabled, type }) => {
  return disabled ? (
    <button type={type} disabled>
      {children}
    </button>
  ) : (
    <button type={type}>{children}</button>
  );
};

export default Button;
