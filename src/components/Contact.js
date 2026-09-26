import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Reveal from "./Reveal";
import {
  BsArrowRight,
  BsArrowUpRight,
  BsClock,
  BsCheckCircle,
  BsEnvelope,
  BsExclamationCircle,
  BsTelephone,
} from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [submission, setSubmission] = useState({ state: "idle", message: "" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async () => {
    setSubmission({ state: "sending", message: "Sending your message..." });

    try {
      await emailjs.sendForm(
        "service_15m4fp5",
        "template_mmq1uul",
        form.current,
        "IRktYfYGtzWxJwJK9"
      );
      reset();
      setSubmission({
        state: "success",
        message: "Thanks for reaching out. I’ll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setSubmission({
        state: "error",
        message: "Your message could not be sent. Please email or call me directly.",
      });
    }
  };

  const fieldError = (fieldName) =>
    errors[fieldName] ? `${fieldName}-error` : undefined;

  return (
    <section className="page-section page-section--tinted contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 id="contact-title">
            Tell me what you&apos;re <span className="text-gradient">building.</span>
          </h2>
          <p className="contact__lede">
            Whether you have a project in mind, a technical challenge to solve,
            or simply want to start a conversation, I&apos;d be glad to hear
            from you.
          </p>

          <ul className="contact__methods" aria-label="Direct contact options">
            <li>
              <a href="mailto:johnmargotti@gmail.com">
                <span className="contact__method-icon" aria-hidden="true">
                  <BsEnvelope />
                </span>
                <span>
                  <small>Email</small>
                  johnmargotti@gmail.com
                </span>
                <BsArrowUpRight className="contact__method-arrow" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="tel:+19739513866">
                <span className="contact__method-icon" aria-hidden="true">
                  <BsTelephone />
                </span>
                <span>
                  <small>Call or text</small>
                  973-951-3866
                </span>
                <BsArrowUpRight className="contact__method-arrow" aria-hidden="true" />
              </a>
            </li>
          </ul>

          <figure className="contact__person">
            <img src="../images/john1.jpg" alt="John Margotti with his family" width="500" height="500" loading="lazy" />
            <figcaption>
              <strong>John Margotti</strong>
              <span>
                <BsClock aria-hidden="true" /> Replies within 24 hours
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="contact__card" delay={120}>
          <div className="contact__card-head">
            <h3>Send a message</h3>
            <p>All fields are required. I respond to every message within 24 hours.</p>
          </div>

          <form
            className="contact-form"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            noValidate
          >
            <div className="contact-form__grid">
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={fieldError("name")}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or fewer",
                    },
                  })}
                />
                {errors.name && (
                  <span className="contact-field__error" id="name-error">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={fieldError("email")}
                  {...register("email", {
                    required: "Please enter your email address",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="contact-field__error" id="email-error">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="contact-form__grid">
              <div className="contact-field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={fieldError("phone")}
                  {...register("phone", {
                    required: "Please enter a phone number",
                    maxLength: {
                      value: 20,
                      message: "Please use 20 characters or fewer",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="contact-field__error" id="phone-error">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={fieldError("subject")}
                  {...register("subject", {
                    required: "Please enter a subject",
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                />
                {errors.subject && (
                  <span className="contact-field__error" id="subject-error">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                rows={7}
                id="message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={fieldError("message")}
                {...register("message", {
                  required: "Please enter a message",
                })}
              />
              {errors.message && (
                <span className="contact-field__error" id="message-error">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              className="btn btn--primary contact-submit"
              type="submit"
              disabled={submission.state === "sending"}
            >
              {submission.state === "sending" ? "Sending..." : "Send message"}
              <BsArrowRight aria-hidden="true" />
            </button>

            {submission.state !== "idle" && submission.state !== "sending" && (
              <p
                className={`contact-status contact-status--${submission.state}`}
                role={submission.state === "error" ? "alert" : "status"}
              >
                {submission.state === "success" ? (
                  <BsCheckCircle aria-hidden="true" />
                ) : (
                  <BsExclamationCircle aria-hidden="true" />
                )}
                {submission.message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
