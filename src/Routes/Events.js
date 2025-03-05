import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Content from "../Components/Content";
import SecurityCards from "../Components/SecurityCards";
import SecurityContent from "../Components/SecurityContent";
import RoleImg from "../Assets/Images/events.jpeg";
import RoleImg2 from "../Assets/Images/safetyEvents.jpeg";
import Accordians from "../Components/Accordians";
import ContactCallBack from "../Components/ContactCallBack";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function Events() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="Event Security"
        securityText="Event security is the measures put in place to ensure the safety of visitors and staff at major events."
      />
      <Content
        title="Secure Your Events with us"
        subtitle="Event security is the measures put in place to ensure the safety of visitors and staff at major events."
        homeContent="The primary purpose of event security is to guarantee the safety and well-being of everyone present. Events gather a large number of people in a confined space, making it essential to have measures in place to handle potential risks and emergencies effectively."
        btn="Click here"
        containerBackgroundColor="lightgrey"
      />
      <SecurityCards />
      <SecurityContent
        ContentHeading="Role of Security Guards in Events"
        ContentParagraph="The event security role includes securing premises and personnel by patrolling grounds, monitoring surveillance equipment, inspecting areas, equipment, and access points and permitting entry, preventing losses and damage by reporting any irregularities, informing violators of policy and procedures and even restraining trespassers. The Event security officer role will include completing reports by recording observations, information, occurrences, and surveillance activities, occasionally interview witnesses and obtain the required details."
        Image1={RoleImg}
        ContentHeading2="Ensuring Safety and Success"
        ContentParagraph2="The primary purpose of event security is to ensure the safety and well-being of attendees. Large gatherings and special events often attract a diverse range of people, making it essential to have effective security measures in place to prevent and respond to potential threats, such as terrorism, violence, or accidents. Security personnel are trained to identify and mitigate risks, maintaining a secure environment for everyone involved."
        Image2={RoleImg2}
      />
      <Accordians
        AccordianTitle="WHAT DEFINES A SPECIAL EVENT?"
        AccordianText=" A special event can be considered any type of function held on campus that is not considered part of the University’s academic mission. Some examples include, concerts, festivals, sporting events, shows, mass gatherings, races, demonstrations, dances, etc."
        AccordianTitle2="WHO DECIDES IF MY EVENT REQUIRES SECURITY?"
        AccordianText2="The Boise State University Department of Public Safety is responsible for working with event organizers to determine the necessary or appropriate security measures for each event on a case-by-case basis. Campus Security and Police Services may require certain security measures at events."
        AccordianTitle3="WHAT CRITERIA ARE USED IN EVALUATING THE SECURITY NEEDS OF MY EVENT?"
        AccordianText3="Any group, organization, or individual that intends to hold or host an event on campus, should notify the Department of Public Safety. If possible, please give at least 30 days notice."
      />
      <ContactCallBack />
      <ScrollButton/>
      <Footer />
    </>
  );
}

export default Events;
