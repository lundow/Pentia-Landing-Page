import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { ReactComponent as PrizeIcon } from "../assets/prize.svg";
import "../css/Contact.css";

const Contact = (props) => {
  const [isRegistered, setIsRegistered] = useState(false);

  const RegisterScreen = () => {
    return (
      <div className="contact" >
        <h3 className="" id="contact-title">
          Få 10 gode råd om <br></br> digital transformation
        </h3>
        <h2 id="contact-subtitle">
          Ja tak, jeg vil gerne høre mere om digital transformation
        </h2>

        <ContactForm onSuccess={() => setIsRegistered(true)}></ContactForm>
        <PrizeIcon id="prize-icon" fill="white"></PrizeIcon>
        <h2 id="bottom-title">
          Pentia vinder pris for digital innovation 2017
        </h2>
      </div>
    );
  };

  const ConfirmationScreen = () => {
    return (
      <div className={"contact fade-in-animation"}>
        <h3 id="confirmation-title"> Tak for din besked!</h3>
        <h2 id="confirmation-text">
          Vi ringer til dig, så snart vi kan - men bare rolig, vi ringer ikke
          midt om natten. En af vores rådgivere vil kontakte dig mellem klokken
          8:30-16:30 i perioden mandag til fredag.
          <br></br>
          <br></br>
          Glæder os til at tale videre med dig.
        </h2>
        <h4 id="confirmation-signature">Pentia</h4>

        <PrizeIcon id="prize-icon" fill="white"></PrizeIcon>
        <h2 id="bottom-title">
          Pentia vinder pris for digital innovation 2017
        </h2>
      </div>
    );
  };

  return <div className="container" id="contact-page">{isRegistered ? ConfirmationScreen() : RegisterScreen()}</div>;
};

export default Contact;
