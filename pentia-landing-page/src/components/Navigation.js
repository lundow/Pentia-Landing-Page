import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";

const Navigation = (props) => {
  return (
    <div className="navigation" style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <div style={styles.hamburger}>
      <Hamburger height="30px" width="30px"></Hamburger>
      </div>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#1B1B1D",
    display:"flex",
    flexDirection:"column",
    height: "100vh",
    width: "60px",
    position: "fixed",
    outline: "none",
    zindex: 1,
  },
  logo: {
    fill: "white",
    height:"30px",
    margin:"15px"
  },
  hamburger:{
    display:"flex",
    flexDirection:"column",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
};
export default Navigation;
