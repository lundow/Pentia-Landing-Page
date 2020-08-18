import React, { useState } from "react";
import "../css/main.css";

const InputField = ({ defaultValue, type, ref, name }, props) => {
  
  return (
    <input
      style={{
        width: "100%",
        borderWidth: "0px",
        backgroundColor: "transparent",
        borderBottomWidth: "1.5px",
        borderColor: "white",
        padding: "10px 10px 10px 0px",
        color: "white",
        fontFamily: "Montserrat",
        fontSize: "1rem",
        outline: "none",
      }}
      name={name}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = defaultValue)}
      placeholder={defaultValue}
      type={type}
      ref={ref}
    />
  );
};

export default InputField;
