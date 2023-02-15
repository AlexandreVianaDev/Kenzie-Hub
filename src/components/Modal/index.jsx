import React from "react";
import StyledModal from "./style";

function Modal({ children }) {
  return (
    <>
      <StyledModal open>
        <div>{children}</div>
      </StyledModal>
    </>
  );
}

export default Modal;
