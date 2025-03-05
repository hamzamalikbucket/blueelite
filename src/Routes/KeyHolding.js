import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Content from "../Components/Content";
import SecurityCards from "../Components/SecurityCards";
import KeyHoldingContent from "../Components/KeyHoldingContent";
import Accordians from "../Components/Accordians";
import ContactCallBack from "../Components/ContactCallBack";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function KeyHolding() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="Key Holding"
        securityText="We provide high security key holding combined with rapid alarm response services across the north of England"
      />
      <Content
        title="No matter what the task"
        subtitle="you can rely on Blue Elite Security to carry out your requirements."
        homeContent="The days of the night watchman are now gone, modern day Security Officers are people who know and understand their responsibilities and diligently apply their sense of sight, hearing and suspicion in order to ensure that property and people are adequately protected. Our Security Officers are trained to do just that, no matter what the task, no matter what the clients business you can rely on Blue Elite Security (UK) Ltd to carry out your requirements in a professional manner."
        btn="Click here"
        containerBackgroundColor="lightgrey"
      />
      <SecurityCards />
      <KeyHoldingContent />
      <Accordians
        AccordianTitle="What is key holding?"
        AccordianText="Keyholding is the responsibility of looking after keys for a business or organisation. Sometimes this is a senior employee or a chosen rota of employees but often a security team. Responsible for opening up and locking down the premises, the keyholder is also the first point of contact in the case of an emergency. When an alarm is triggered, they are the first people to respond."
        AccordianTitle2="Why use a keyholding service?"
        AccordianText2="Outsourcing your keyholding comes with a number of benefits for your business. Not least because you know that any alarm activation will be attended by someone who is experienced in how to react.As well as this safety factor, there’s also the convenience which senior staff will benefit from, knowing their business is in safe hands while they’re away from the office."
        AccordianTitle3="What makes a good trusted keyholder?"
        AccordianText3="A position of responsibility, an internal keyholder is often a senior employee or better a specialist security company. Because they are required to respond quickly should an alarm be triggered. As they are accountable for correctly locking up and setting alarm systems, characteristics that would make for a good keyholder include being highly conscientious, responsible and dependable."
      />
      <ContactCallBack />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default KeyHolding;
