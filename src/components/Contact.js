import React from "react";
import Navigation from "./Navigation";
import Logo from "../logo.png";

const Contact = () => (
  <React.Fragment>
    <Navigation />
    <div className="div" style={{ marginTop: "50px" }}>
      <center>
        <img src={Logo} alt="Logo" />
      </center>
    </div>
    <div id="contact" className="contact">
      <h1>Contact Us</h1>

      <div className="contact-form">
        <form action="" method="POST">
          <div className="txtbox">
            <label htmlFor="fname">Full Name :</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="txtbox">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="txtbox">
            <label htmlFor="phone">Phone :</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone"
              required
            />
          </div>

          <div className="txtbox">
            <label htmlFor="message">Message :</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            />
          </div>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </React.Fragment>
);

export default Contact;
