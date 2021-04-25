import { Button, TextField } from "@material-ui/core";
import React from "react";
import Layout from "../Layout";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import "./Contact.css";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
const Contact = () => {
  
  return (
    <Layout>
      <div className="Contact">
        <h1 className="SectionHeader contact">Contact Me</h1>
        <div className="ContactArea">
          <div className="SendMailArea">
            <h2>Get In Touch</h2>
            <form className="ContactForm">
              <TextField
                id="outlined-error"
                label="Enter Your Name"
                defaultValue=""
                variant="outlined"
              />
              <TextField
                id="outlined-error"
                label="Enter Your Email"
                defaultValue=""
                variant="outlined"
              />
              <TextField
                id="outlined-error"
                label="Enter Your Subject"
                defaultValue=""
                variant="outlined"
              />
              <TextField
                className="MessageField"
                id="outlined-error"
                label="Enter Your Message"
                multiline
                rows={10}
                defaultValue=""
                variant="outlined"
              />
              <Button>SEND MAIL</Button>
            </form>
          </div>
          <div className="OtherContactInfo">
            <div className="ContactCard">
              <span className="ContactCardIcon">
                <CallOutlinedIcon />
              </span>
              <div className="ContactCardInfo">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+256705754073">+256-705754073</a>
                </p>
                <p>
                  <a href="tel:+256770718905">+256-770718905</a>
                </p>
              </div>
            </div>
            <div className="ContactCard">
              <span className="ContactCardIcon">
                <EmailOutlinedIcon />
              </span>
              <div className="ContactCardInfo ContactEmail">
                <h3>Email</h3>
                <p>
                  <a href="mailto:mubangizia22@gmail.com">
                    mubangizia22@gmail.com
                  </a>
                </p>
              </div>
            </div>
            ContactEmail
            <div className="ContactCard">
              <span className="ContactCardIcon">
                <LocationOnOutlinedIcon />
              </span>
              <div className="ContactCardInfo ContactAddress">
                <h3>Address</h3>
                <p>Uganda, Kampala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
