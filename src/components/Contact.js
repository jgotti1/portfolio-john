import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
  const sendEmail = (e) => {
    const btn = document.getElementById("button");
    btn.value = "Sending...";
    emailjs.sendForm("default_service", "template_qt9fba7", form.current, "9EmwpRImGcz6E8zyG").then(
      (result) => {
        console.log(result.text);
        reset();

        alert("Email request sent successfully. Talk to you soon! Thanks");
      },
      (error) => {
        console.log(error.text);
        alert(JSON.stringify(error));
      }
    );
  };
  return (
    <div className="contact_us">
      <h3 className="contact_head">Contact Me</h3>
      <h5>Fill out the form below and I will get back to you soon</h5>
      <h4>Or if you prefer call or text 973-951-3866</h4>

      <div className="contact_container">
        <div className="contact_box">
          <form id="form" ref={form} onSubmit={handleSubmit(sendEmail)} noValidate>
            <p className="required">* all fields required</p>
            <div className="field">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
              />
              {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
            </div>
            {errors.email && <span className="errorMessage">Please enter a valid email address</span>}
            <div className="field">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                {...register("phone", {
                  required: { value: true, message: "Please enter a phone number" },
                  maxLength: {
                    value: 20,
                    message: "Best contact number",
                  },
                })}
              />
            </div>
            {errors.phone && <span className="errorMessage">{errors.phone.message}</span>}
            <div className="field">
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
              />
            </div>
            {errors.subject && <span className="errorMessage">{errors.subject.message}</span>}
            <div className="field">
              <label htmlFor="message">message</label>
              <textarea
                className="message"
                type="text"
                rows={13}
                name="message"
                id="message"
                {...register("message", {
                  required: true,
                })}
              />
            </div>
            {errors.message && <span className="errorMessage">Please enter a message</span>}
            <input type="submit" id="button" value="Send Email" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
