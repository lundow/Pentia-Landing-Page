import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import MenuScreen from "./MenuScreen.js";

import HamburgerButton from "./HamburgerButton.js";
import "../css/Topbar.css";
const Topbar = ({ openHandler, sidebarOpen }, props) => {
 
  return (
    <div className={"topbar"}>
      <div className="toggle-field-top">
        <Logo style={styles.logo}></Logo>

        <HamburgerButton
          _style={styles.hamburger}
          onPress={openHandler}
        ></HamburgerButton>

        <MenuScreen
          sidebarOpen={sidebarOpen}
          openHandler={openHandler}
        ></MenuScreen>
      </div>
    </div>
  );
};

let styles = {
  logo: {
    fill: "white",
    height: "25px",
    position: "absolute",
    left: "6%",
    top: 20,
  },
  hamburger: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    right: 15,
    top: 15,
  },
};
export default Topbar;
