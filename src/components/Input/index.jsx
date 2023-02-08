import React from "react";

const Input = ({ label, type, placeholder, htmlFor }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
