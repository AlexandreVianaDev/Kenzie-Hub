import React from "react";
import StyledHeader from "./style";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <div className="container">{children}</div>
    </StyledHeader>
  );
};

export default Header;
