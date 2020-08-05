import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";
import "../css/Navigation.css";
const Navigation = (width, height, children) => {
  const [sidebarOpen, setSideBarOpen] = useState(null);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  };

  const getClass = () => {
    let navigationClass = ["navigation"];

    if (sidebarOpen) {
      navigationClass.push("sidebar-open");
    } else if (sidebarOpen === false) {
      navigationClass.push("sidebar-close");
    }
    return navigationClass.join(" ");
  };
  return (
    <div className={getClass()}>
      <div className="toggle-field">
        <Logo style={styles.logo}></Logo>
        <div style={styles.hamburger}>
          <button className="hamburger-button" onClick={() => openHandler()}>
            <Hamburger height="30px" width="30px"></Hamburger>
          </button>
        </div>
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
export default Navigation;
