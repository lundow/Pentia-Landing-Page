import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";
import { ReactComponent as ContactIcon } from "../assets/contact.svg";
import HamburgerButton from "./HamburgerButton.js";
import "../css/Sidebar.css";
import "../css/main.css";
const Sidebar = ({ openHandler, sidebarOpen, height, children }, props) => {
  
  
  const getClass = () => {
    let navigationClass = ["sidebar"];
    if (sidebarOpen) {
      navigationClass.push("sidebar-open");
    } else if (sidebarOpen === false) {
      navigationClass.push("sidebar-close");
    }
    return navigationClass.join(" ");
  };

  return (
    <div className={getClass()}>
      <div className="icons">
        <HomeIcon className="icon" fill="white" height="30"></HomeIcon>
        <InfoIcon className="icon" fill="white" height="30"></InfoIcon>
        <ContactIcon className="icon" fill="white" height="30"></ContactIcon>
      </div>
      <div className="toggle-field-side">
        <Logo style={styles.logo}></Logo>
        <HamburgerButton
          _style={styles.hamburger}
          onPress={openHandler}
        ></HamburgerButton>
      </div>
    </div>
  );
};

let styles = {
  logo: {
    fill: "white",
    height: "30px",
    margin: "15px",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
export default Sidebar;
