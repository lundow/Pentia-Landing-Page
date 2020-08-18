import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import "../css/ContactForm.css";

const ContactForm = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

 /*  console.log(watch("example")); // watch input value by passing the name of it */
  return (
   
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div id="name-field">
          <InputField defaultValue="Navn" name="name" ref={register}></InputField> 
        </div>
        <div id="phone-field">
          <InputField defaultValue="Mobil" name="phone" ref={register}></InputField> 
        </div>
        <div id="email-field">
          <InputField defaultValue="e-mail" name="email" ref={register}></InputField> 
        </div>

        <div id="zipcode-field">
          <InputField defaultValue="Postnr." name="zipcode" ref={register}></InputField> 
        </div>

        <div id="city-field">
          <InputField defaultValue="By" name="city" ref={register}></InputField> 
        </div>

        <input value="Ring mig op"id="submit-button" type="submit"></input>
      </form>
  );
};


export default ContactForm;
