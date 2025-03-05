import React from "react";
import Navbar from "../Components/Navbar";
import Aboutbg from "../Components/Aboutbg";
import AboutContent from "../Components/AboutContent";
import Content from "../Components/Content";
import AboutTextImg from "../Components/AboutTextImg";
import SlickSlider from "../Components/SlickSlider";
import Footer from "../Components/Footer";
import AboutService from "../Components/AboutService";
import ScrollButton from "../Components/ScrollButton";

function About() {
  return (
    <>
      <Navbar />
      <Aboutbg />
      <AboutContent />
      <Content
        title="Over 40 years experience"
        subtitle="A family run business based in Huddersfield , West Yorkshire"
        homeContent="  Blue Elite (UK) Ltd are a family run business based in Huddersfield , West Yorkshire with over 40 years experience within the Security Industry . We are providers of professional security services within both the private and public sector and are involved in many areas of the security industry. We are proud of the fact we are a family run company and the majority of our staff have been with us for a very long period of time ensuring that trust and moral is very high within the company, which enables us to provide a better service"
        btn="View Our Services"
        containerBackgroundColor="lightgrey"
      />
      <AboutTextImg />
      <SlickSlider />
      <AboutService/>
      <ScrollButton/>
      <Footer />
    </>
  );
}

export default About;
