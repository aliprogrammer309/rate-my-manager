import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../components/contact/contact.css";
import { Button } from "@mui/material";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./contactus.css";

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
      <div className="contact-content-container">
        <p>
          Thank you for your interest in Rate My O, the ultimate platform for
          reviewing your boss, co-workers,and company. <br />
          <br />
          While we try to provide enough guidance on the website for you to
          perform all activities without any external assistance, we are happy
          to hear from you and help you resolve all your concerns. <br />
          <br />
          Whether you want to confirm a review posted about your company or you
          want further clarifications on how to use the platform, kindly fill
          the contact form below. Please fill out every part of the form, to
          help us understand your situation better and help you appropriately.{" "}
          <br />
          <br />
          <em>
            If you have more urgent concerns that cannot wait any further,
            please reach out to us via the contact details below:
          <br /></em>
          {/* <b>Phone Number:</b> */}
          <b>Email address: </b>main@ratemyo.com
        </p>
      </div>

      {/* <div className="pages-container"> */}
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
      {/* </div> */}
    </>
  );
};

export default ContactUs;
