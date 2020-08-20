import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "../css/Main.css";
const Navigation = ({ isDesktopDisplay }, props) => {
  const [sidebarOpen, setSideBarOpen] = useState(null);
  const [lastDisplayValue, setLastDisplayValue] = useState(null);

  useEffect(() => {
    if (isDesktopDisplay !== lastDisplayValue) {
      resetAnimation();
      setLastDisplayValue(isDesktopDisplay);
    }
  }, [isDesktopDisplay,lastDisplayValue ]);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSideBarOpen(true);
    } else {
      setSideBarOpen(false);
    }
  };

  const resetAnimation = () => {
    setSideBarOpen(null);
  };

  const getContent = () => {
    return isDesktopDisplay ? (
      <Sidebar
        sidebarOpen={sidebarOpen}
        openHandler={() => openHandler()}
      ></Sidebar>
    ) : (
      <Topbar
        sidebarOpen={sidebarOpen}
        openHandler={() => openHandler()}
      ></Topbar>
    );
  };
  return <div>{getContent()}</div>;
};

export default Navigation;
