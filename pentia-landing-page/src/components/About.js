import React from "react";
import { ReactComponent as Illustration1 } from "../assets/illustration1.svg";
import { ReactComponent as Illustration2 } from "../assets/illustration2.svg";
import "../css/main.css";
import "../css/About.css";

const About = (props) => {
  return (
    <div className="about">
      <h3 className="" id="about-title">
        Vi kan hjæelpe dig med<br></br> digital transformation på to fronter
      </h3>
      <Illustration1 className="logo" id="illustration-1"></Illustration1>
      <h4 id="about-subtitle">
        Strategisk rådgivning om digital transformation
      </h4>
      <p id="about-description">
        Udnytter din virksomhed sit digitale potentiale? Hvilke
        forretningsmuligheder er der, og hvad betyder det på et strategiskt
        plan?
      </p>

      <Illustration2 className="logo" id="illustration-2"></Illustration2>
      <h4 id="about-subtitle-right">
       Eksekvering af digital transformation
      </h4>
      <p id="about-description-right">
        I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i 
        forhold til organisationen og det digitale fundament bl.a. på Sitecore.
        Det handler om mennesker og resultater.
      </p>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
  },
};
export default About;
