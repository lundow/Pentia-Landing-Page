import React from "react";
import Zeppelin from "../assets/zeppeliner.svg";
import { ReactComponent as Dots } from "../assets/dots.svg";
import { Link } from "react-scroll";
import "../css/Main.css";
import "../css/Home.css";

const Home = (props) => {
  return (
    <div className="home" id="home-page" >
      <h4 id="header-text">Lorem Ipsum</h4>
      <img
        id="zeppelin"
        src={Zeppelin}
        /* style={{ height: 350, width: 350, fill: "white" }} */
        alt="Zeppelin"
      ></img>

      <h1 id="title">Digital transformation</h1>
      <h2 id="subtitle">Rådgivning. Implementering. Resultater</h2>

      <p id="description">
        Hvordan bliver din virksomhed en digital vinder i fremtiden? Hvilke
        tiltag skal der til strategisk og taktisk for at dreje forretningen i
        den rigtige retning? Hvilke elementer indeholder en succesfuld digital
        transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fra
        strategisk rådgivning til implementering
      </p>

      <Link to="about-page" smooth="true" duration={800} id="transition-box">
        <h5>Start din rejse her</h5>
        <Dots height="20"></Dots>
      </Link>
    </div>
  );
};


export default Home;
