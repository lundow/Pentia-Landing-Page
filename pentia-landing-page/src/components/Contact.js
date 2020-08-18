import React from "react";
import ContactForm from "./ContactForm";
import { ReactComponent as PrizeIcon } from "../assets/prize.svg";
import "../css/Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <h3 className="" id="contact-title">
        Få 10 gode råd om <br></br> digital transformation
      </h3>

      <h2 id="contact-subtitle">
        Ja tak, jeg vil gerne høre mere om digital transformation
      </h2>

      <ContactForm></ContactForm>

      <PrizeIcon id="prize-icon" fill="white"></PrizeIcon>

      <h2 id="bottom-title">Pentia vinder pris for digital innovation 2017</h2>
    </div>
  );
};

export default Contact;
