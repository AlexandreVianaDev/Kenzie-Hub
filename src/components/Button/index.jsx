import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to }) => {
  return <button to={to}>{children}</button>;
};

export default Button;
