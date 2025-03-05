import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Contactform from "../Components/Contactform";
import ScrollButton from "../Components/ScrollButton";
import Footer from "../Components/Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="Contact Us"
        securityText="Talk to a security expert about your security requirments, any time day or night, 365 days a year."
      />
      <Contactform />
      <ScrollButton/>
      <Footer/>
    </>
  );
}

export default ContactUs;
