import React from "react";
import Navbar from "../Components/Navbar";
import HomeSlider from "../Components/HomeSlider";
import Content from "../Components/Content";
import FeatureService from "../Components/FeatureService";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function Home() {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <Content
        title="WELCOME TO Blue Elite Security"
        subtitle="The premier security service aiming to protect people."
        hometext="  Our vision is the opposite of the industry’s “one-stop shop”
              approach, where one business provides security, cleaning and other
              Soft FM services. We are highly experienced security professionals
              and we are proud to be a dynamic and agile provider of specialist
              security services across London and the UK."
        homeContent="   Blue Elite Security (UK) Ltd are a family run business based in
              Huddersfield , West Yorkshire with over 40 years experience within
              the Security Industry . We are providers of professional security
              services within both the private and public sector and are
              involved in many areas of the security industry. We are proud of
              the fact we are a family run company and the majority of our staff
              have been with us for a very long period of time ensuring that
              trust and moral is very high within the company, which enables us
              to provide a better service."
        btn="Read more about us"
      />
      <FeatureService />
      <ScrollButton/>
      <Footer />
    </>
  );
}

export default Home;
