import React from "react";
import "./style/Input.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="field">
      <h3 className="titleFormCreateAdmin">{label}</h3>
      <input {...rest} required />
    </div>
  );
};

export default Input;
