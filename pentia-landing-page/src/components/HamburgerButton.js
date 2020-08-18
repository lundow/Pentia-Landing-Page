import React from "react";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";

const HamburgerButton = ({ onPress, _style }, props) => {
  return (
    <div style={_style}>
      <button style={styles.hamburger} onClick={onPress}>
        <Hamburger height="30px" width="30px"></Hamburger>
      </button>
    </div>
  );
};

let styles = {
  hamburger: {
    outline: "none",
    outlineOffset: "none",
    textDecoration: "none",
    display: "inline-block",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    webkitAppearance: "none",
    mozAppearance: "none",
  },
};
export default HamburgerButton;
