import React from "react";
import StyledModal from "./style";

const Modal = ({ children }) => {
  return (
    <>
      <StyledModal>
        <div>{children}</div>
      </StyledModal>
    </>
  );
};

export default Modal;
