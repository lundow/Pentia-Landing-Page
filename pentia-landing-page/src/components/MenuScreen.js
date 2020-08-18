import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as CloseButton } from "../assets/close.svg";
import "../css/MenuScreen.css";

const MenuScreen = ({ openHandler, sidebarOpen, height, children }, props) => {
  const getClass = () => {
    let navigationClass = ["menu-container"];

    if (sidebarOpen) {
      navigationClass.push("menu-open");
    } else if (sidebarOpen === false) {
      navigationClass.push("menu-close");
    }
    return navigationClass.join(" ");
  };

  return (
    <div className={getClass()}>
      <CloseButton
        id="close-button"
        onClick={openHandler}
        fill="white"
        height="15px"
      ></CloseButton>

      <div className="nav-menu">
          <a>
        <h1 className="menu-item" id="home-item">
          HOME
        </h1></a>
        <a><h1 className="menu-item">ABOUT</h1></a>
        <a><h1 className="menu-item">CONTACT</h1></a>
      </div>
    </div>
  );
};

export default MenuScreen;
