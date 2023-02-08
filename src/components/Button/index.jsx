import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to }) => {
  return <Link to={to}>{children}</Link>;
};

export default Button;
