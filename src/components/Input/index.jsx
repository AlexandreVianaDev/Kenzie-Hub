import React, { forwardRef } from "react";
import StyledInput from "./style";

const Input = ({ label, type, placeholder, id, error, ...rest }, ref) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        ref={ref}
        placeholder={placeholder}
        {...rest}
      />
      {error ? <p className="field__error">{error}</p> : null}
    </StyledInput>
  );
};

export default forwardRef(Input);
