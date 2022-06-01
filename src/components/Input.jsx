import React from "react";
import "../style/Input.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="field">
      <label htmlFor="">{label}</label>
      <input {...rest} />
    </div>
  );
};

export default Input;
