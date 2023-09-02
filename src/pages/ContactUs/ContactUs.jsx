import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../components/contact/contact.css";
import { Button } from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0x5e1m",
        "template_51stsnd",
        form.current,
        "6aw_y65kOOaeOJP2j"
      )
      .then(
        (result) => {
          alert("Your message sent succesfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <Navbar showLinks={true} />
      <div className="pages-container">
        <div className="contact-container">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <h4>Share Your thoughts with us!</h4>
          </div>
          <form ref={form} className="contact-right" onSubmit={sendEmail}>
            <input
              required
              type="text"
              name="user_name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              rows={8}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button type="submit" variant="contained" style={{ margin: "5px" }}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
