import React from "react";
import "./FormInput.css";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <div className="container">
      <label className="lableName" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="inputs"
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
