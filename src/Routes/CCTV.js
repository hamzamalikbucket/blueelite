import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Content from "../Components/Content";
import SecurityCards from "../Components/SecurityCards";
import SecurityContent from "../Components/SecurityContent";
import RoleImg from "../Assets/Images/cctvMonitoring.jpg";
import RoleImg2 from "../Assets/Images/Camera.jpg";
import Accordians from "../Components/Accordians";
import ContactCallBack from "../Components/ContactCallBack";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function CCTV() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="CCTV Monitoring"
        securityText="We use state of the art monitoring software to ensure out clients properties are protected around the clock"
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
        ContentHeading="MONITORED CCTV SYSTEMS"
        ContentParagraph="Remotely monitored CCTV can deter intruders through the implementation of audio warnings and ensuring immediate action is always taken, whether by contacting key-holders or emergency services, to minimise both risk and damage to property and assets. When using unmonitored CCTV in your business, recorded footage can only be retrospectively reviewed: after the damage has already occurred and the intruder has likely already left the area."
        Image1={RoleImg}
        ContentHeading2="CCTV MONITORING SPECIALISTS"
        ContentParagraph2="CCTV monitoring provides security surveillance to protect you, your business, or your home from criminal activity. We use state of the art technology to react to emergencies rapidly, acting as a deterrent that effectively stops intruders. When you’re away, our remote monitoring can provide you with ultimate peace of mind. Integration with public address systems allows for personalised warnings to be given to intruders before a crime has been committed."
        Image2={RoleImg2}
      />
      <Accordians
        AccordianTitle=" How does the system work in residential areas?"
        AccordianText="We try to keep disturbance to a minimum in all locations, however in residential areas we appreciate that this becomes even more important. Because our monitoring staff assess each individual alarm we only respond to genuine threats, minimising the disturbance caused to residents and pedestrians."
        AccordianTitle2="Is your team monitoring the cameras all the time?"
        AccordianText2="No, the surveillance equipment we install work using detection software that alerts staff based on detected movement. Although the cameras are recording 24/7 we only view the cameras once an alarm has been triggered or the camera detects movement. During working hours when the system is unarmed we will not view any images."
        AccordianTitle3="What are CCTV used for?"
        AccordianText3="CCTV systems are typically used to monitor and record the activity of a building, as well as its surroundings. These systems are used to primarily combat crime such as theft or vandalism. Also, these systems are also referred to as video surveillance."
      />
      <ContactCallBack />
      <ScrollButton/>
      <Footer />
    </>
  );
}

export default CCTV;
