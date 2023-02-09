import React from "react";
import StyledLink from "./style";

const LinkMedium = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LinkMedium;
