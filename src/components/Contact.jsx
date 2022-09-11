import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "../styles";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    const buttonText = document.querySelector(".button-text-span");
    const button = document.querySelector(".submit-button");
    const buttonSpan = document.querySelector(".button-span");
    button.disabled = true;
    button.style.cursor = "default";
    buttonSpan.textContent = "Sending...";
    emailjs
      .sendForm(
        "service_ug271wk",
        "template_3m8k099",
        form.current,
        "vx30CPz73CVwYGpVi"
      )
      .then(
        (result) => {
          console.log(result.text);
          buttonText.innerText = "Thanks for the message!";
          buttonSpan.textContent = "Send";
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          buttonText.innerText =
            "There was an error sending your email.Please try again !";
          buttonSpan.textContent = "Send";
        }
      );
    setTimeout(() => {
      buttonText.innerText = "";
    }, 8000);
  };
  return (
    <ContactWrapper className="contact" id="contact">
      <hr />
      <br />
      <SectionHeader>
        <span>03.</span>
        <h2> Contact</h2>
      </SectionHeader>
      <p>
        I&apos;m currently looking for a role as a frontend developer. Whether
        you have a question, an offer or just want to chat, send me a message
        and I will get back to you!
      </p>
      <FormWrapper className="form" ref={form} onSubmit={sendEmail}>
        <input
          aria-label="Enter your name"
          className="form__name"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          aria-label="Enter your email address"
          className="form__email"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          aria-label="Enter your message"
          name="message"
          placeholder="Message"
          required
        />
        <div>
          <button
            className="submit-button"
            type="submit"
            value="Send"
            aria-label="Send your message"
          >
            <div>
              <span className="button-span">Send</span>
            </div>
          </button>
          <span className="button-text-span"></span>
        </div>
      </FormWrapper>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  background-color: #1a1a2d;
  hr {
    width: 100%;
  }
`;

const FormWrapper = styled.form`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  width: 40%;
  margin-top: 0.5rem;

  input,
  textarea {
    max-width: 80%;
  }
  button {
    padding: 0.5rem 1rem;
    width: 30%;
    border-radius: 8px;
    border: none;
  }
  div span {
    margin-left: 1rem;
  }
`;

export default Contact;
