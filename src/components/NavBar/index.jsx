import React from "react";
import StyledNavBar from "./style";

const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      <div className="container">{children}</div>
    </StyledNavBar>
  );
};

export default NavBar;
