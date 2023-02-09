import React from "react";

const Button = ({ children, to, disabled }) => {
  return disabled ? <button to={to} disabled>{children}</button> : <button to={to}>{children}</button>
};

export default Button;
