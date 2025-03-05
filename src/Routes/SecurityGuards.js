import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Content from "../Components/Content";
import SecurityCards from "../Components/SecurityCards";
import SecurityContent from "../Components/SecurityContent";
import Accordians from "../Components/Accordians";
import ContactCallBack from "../Components/ContactCallBack";
import ScrollButton from "../Components/ScrollButton";
import Footer from "../Components/Footer";
import RoleImg from "../Assets/Images/responsibility.avif";
import RoleImg2 from "../Assets/Images/cards-bg-img.jpg";

function SecurityGuards() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="Security Guards and Officers"
        securityText="Blue Elite Security offer SIA licensed static security officers
                to protect your premises when they are most vulnerable"
      />
      <Content
        title="No matter what the task"
        subtitle="you can rely on Blue Elite Security to carry out your requirements."
        homeContent="The days of the night watchman are now gone, modern day Security Officers are people who know and understand their responsibilities and diligently apply their sense of sight, hearing and suspicion in order to ensure that property and people are adequately protected. Our Security Officers are trained to do just that, no matter what the task, no matter what the clients business you can rely on Blue Elite Security (UK) Ltd to carry out your requirements in a professional manner."
        btn="Click here"
        containerBackgroundColor="lightgrey"
      />
      <SecurityCards />
      <SecurityContent
        ContentHeading="ROLES AND RESPONSIBILITIES"
        ContentParagraph="The roles and responsibilities of today’s Security Officer have
                increased in recent years, Companies have become much more cost
                conscious and therefore more aware of their requirements to
                prevent losses/wastage. Many companies realise this and employ
                Security Officers in order to prevent and detect losses by
                theft, prevent water damage and vandalism. They can prevent
                wastage and control access i.e. visitors, contractors, workforce
                etc into the client premises The Security officer therefore has
                become an integral part of the management of a site. They are in
                a position of both authority and responsibility."
        Image1={RoleImg}
        ContentHeading2="HELPING BUSINESS OPERATIONS"
        ContentParagraph2="The Security Officer of today can play an important determining
                role in the successful operations of any business, corporate or
                manufacturing, retail or financial. No matter what the industry
                or assignment the Security Officer, through their positive
                training and their expertise are capable of adapting themselves
                to many varying security related duties, from coordinating a
                busy reception area to manning and monitoring a distribution
                company’s gatehouse or CCTV system."
        Image2={RoleImg2}
      />
      <Accordians
        AccordianTitle=" How much does it cost to hire a Security Guard?"
        AccordianText="The cost of a security guard depends on various factors
                      including location, job requirements, length of contract,
                      shift patterns, number of guards etc."
        AccordianTitle2="Why is Security Guarding an essential service?"
        AccordianText2="In today’s society Security Guards are pivotal in ensuring businesses remain safe in and out of normal working hours. Additionally, Security Guards can offer protection and visual deterrence to potential criminals who are targeting specific companies and buildings. Every company has some degree of security measure in place whether that be a Security Guard, CCTV, fencing or a simple door lock. Securing your assets and property is of huge importance to all businesses across the country."
        AccordianTitle3=" What is the SIA?"
        AccordianText3="The SIA (Security Industry Authority) are the regulatory
                      body responsible for creating the rules and regulations of
                      the private security industry sector."
      />
      <ContactCallBack />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default SecurityGuards;
