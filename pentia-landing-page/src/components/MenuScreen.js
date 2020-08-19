import React from "react";
import { ReactComponent as CloseButton } from "../assets/close.svg";
import "../css/MenuScreen.css";
import { Link } from "react-scroll";

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
    <div className={getClass()} id="home-page">
      <CloseButton
        id="close-button"
        onClick={openHandler}
        fill="white"
        height="15px"
      ></CloseButton>

      <div className="nav-menu">
        <Link onClick={openHandler} to="home-page" smooth={true} duration={800}>
          <h1 className="menu-item" id="home-item">
            START
          </h1>
        </Link>

        <Link
          onClick={openHandler}
          to="about-page"
          smooth={true}
          duration={800}
        >
          <h1 className="menu-item">OM PENTIA</h1>
        </Link>

        <Link
          onClick={openHandler}
          to="contact-page"
          smooth={true}
          duration={800}
        >
          <h1 className="menu-item">KONTAKT</h1>
        </Link>
      </div>
    </div>
  );
};

export default MenuScreen;
