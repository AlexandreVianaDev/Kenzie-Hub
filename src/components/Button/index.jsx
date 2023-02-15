import React from "react";
import StyledButton from "./style";

const Button = ({ children, disabled, type }) => {
  return disabled ? (
    <StyledButton type={type} disabled>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type={type}>{children}</StyledButton>
  );
};

export default Button;
