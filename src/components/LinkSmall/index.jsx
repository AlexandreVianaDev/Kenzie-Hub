import React from "react";
import StyledLink from "./style";

const LinkSmall = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LinkSmall;
