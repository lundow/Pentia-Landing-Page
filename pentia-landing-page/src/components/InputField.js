import React, { useState } from "react";
import "../css/main.css";

const InputField = ({ defaultValue }, props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [labelText, setLabelText] = useState(defaultValue);



  const handleBlur = (e) => {
    console.log(e);
  };
  return (

    <input
      style={{
        width:"100%",
        borderWidth: "0px",
        backgroundColor: "transparent",
        borderBottomWidth: "1.5px",
        borderColor: "white",
        padding: "10px 10px 10px 0px",
        color: "white",
        fontFamily: "Montserrat",
        fontSize:"1rem",
        outline: "none",

      }}
      name="example"
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = defaultValue)}
      placeholder={defaultValue}
      
      ref={props.register}
    />
  );
};

export default InputField;
