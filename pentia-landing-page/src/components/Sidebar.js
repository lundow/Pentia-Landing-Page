import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";
import { ReactComponent as ContactIcon } from "../assets/contact.svg";
import { Link } from "react-scroll";
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
        <Link onClick={openHandler} to="home-page" smooth={true} duration={800}>
          <HomeIcon className="icon" fill="white" height="30"></HomeIcon>
        </Link>

        <Link
          onClick={openHandler}
          to="about-page"
          smooth={true}
          duration={800}
        >
          <InfoIcon className="icon" fill="white" height="30"></InfoIcon>
        </Link>
        <Link
          onClick={openHandler}
          to="contact-page"
          smooth={true}
          duration={800}
        >
          <ContactIcon className="icon" fill="white" height="30"></ContactIcon>
        </Link>
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
