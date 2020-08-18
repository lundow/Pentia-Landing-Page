import React from "react";
import { useForm } from "react-hook-form";
import "../css/ContactForm.css";

const ContactForm = ({ onSuccess }, props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onSuccess();
  };

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input-field"
        id="name-field"
        style={errors.name && { borderColor: "#2a2a2c" }}
        type="text"
        placeholder={"Navn"}
        name="name"
        ref={register({ required: true })}
      />

      <input
        id="phone-field"
        className="input-field"
        style={errors.phone && { borderColor: "#2a2a2c" }}
        type="text"
        placeholder="Mobil"
        name="phone"
        ref={register({ required: true, pattern: /^[0-9\s +]*$/ })}
      ></input>

      <input
        id="email-field"
        className="input-field"
        style={errors.email && { borderColor: "#2a2a2c" }}
        type="text"
        placeholder={"e-mail"}
        name="email"
        ref={register({ required: true, pattern:/^\S+@\S+\.\S+$/})}
      ></input>

      <input
        id="zipcode-field"
        className="input-field"
        style={errors.zipcode && { borderColor: "#2a2a2c" }}
        type="text"
        placeholder="Postnr."
        name="zipcode"
        ref={register({ required: true })}
      ></input>

      <input
        id="city-field"
        className="input-field"
        style={errors.city && { borderColor: "#2a2a2c" }}
        type="text"
        placeholder="By"
        name="city"
        ref={register({ required: true })}
      ></input>

      <input type="submit" value="Ring mig op" id="submit-button"></input>
    </form>
  );
};


export default ContactForm;
