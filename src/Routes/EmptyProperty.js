import React from "react";
import Navbar from "../Components/Navbar";
import SecurityGuardImg from "../Components/SecurityGuardImg";
import Content from "../Components/Content";
import SecurityCards from "../Components/SecurityCards";
import SecurityContent from "../Components/SecurityContent";
import RoleImg from "../Assets/Images/VacantPropertSecurity.jpg";
import RoleImg2 from "../Assets/Images/EmptyPropertySecurity.jpg";
import Accordians from "../Components/Accordians";
import ContactCallBack from "../Components/ContactCallBack";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function EmptyProperty() {
  return (
    <>
      <Navbar />
      <SecurityGuardImg
        securityheading="Empty Property Security"
        securityText="Empty premises such as redundant residential or commercial buildings, storage yards or remote vehicle parks are particularly vulnerable to theft or damage by intruders."
      />
      <Content
        title="Protecting your property from unwanted visitors"
        subtitle="secur­ing a prop­er­ty util­is­ing sim­ple deter­rents"
        homeContent="When properties become vacant, they become an easy target for unwanted trespassers like squatters and vandals. Even seemingly innocent visits from those with less malicious intentions such as urban explorers can cause damage to a property and leave the owner with an unwanted repair bill. We believe it’s the owners of a vacant property and the owners alone that should have access to a property."
        btn="Click here"
        containerBackgroundColor="lightgrey"
      />
      <SecurityCards />
      <SecurityContent
        ContentHeading="WHY SECURE EMP­TY PROPERTY?"
        ContentParagraph="Well secured, pro­tect­ed and main­tained vacant prop­er­ties will be less dam­ag­ing to the local com­mu­ni­ty, attract less van­dal­ism, arson and theft, and be bet­ter pre­pared for re-occu­pan­cy or resale. Well main­tained and secure emp­ty prop­er­ties pro­mote bet­ter neigh­bour­hoods and main­tain their value. Well main­tained and secure emp­ty prop­er­ties are low­er insur­ance risks. Blue Elite Security can ensure that the proper procedures are in place to meet current regulations governing the insurance of vacant property."
        Image1={RoleImg}
        ContentHeading2="VACANT PROPERTY SECURITY"
        ContentParagraph2="Our team of highly trained mobile patrol officers can make the regular inspections necessary to satisfy all the insurance requirements relating to such properties. By maintaining a regular presence at a property, patrol officers can also ensure a regular reporting process is in place to enable a proactive response to a variety of problems, including:
        "
        Point1="1  Site protection, to prevent unwanted access"
        Point2="2 Welfare and maintenance checks"
        Point3="3 Health and Safety Issues or Concerns"
        Point4="4 Key holding and alarm response service"
        Point5="5 Emergency call-outs, mobile patrols and void property inspections"
        Image2={RoleImg2}
      />
      <Accordians
        AccordianTitle="What are the risks of a vacant property?"
        AccordianText="A high number of vacant properties and houses can make a location appear undesirable, either because they’re indicative of a failing economy or because empty properties can attract opportunist criminals like thieves which puts people off. This might not directly impact your property, but should you wish to occupy the property once more or sell it in the future, you stand the risk of losing money on your investment."
        AccordianTitle2="How do you secure a vacant property?"
        AccordianText2="There are a number of ways you can secure a vacant property depending on the premises type and how long it’s going to be vacant for. If you’re looking to secure a vacant residential property, you can install fencing/gates, security alarms, CCTV cameras or extra lighting. One of the best way of securing a vacant property is hiring a specialist security team such as Blue Elite Security to ensure the property is safe and secure."
        AccordianTitle3="WHY SECURE EMP­TY PROPERTY?"
        AccordianText3="Well secured, pro­tect­ed and main­tained vacant prop­er­ties will be less dam­ag­ing to the local com­mu­ni­ty, attract less van­dal­ism, arson and theft, and be bet­ter pre­pared for re-occu­pan­cy or resale."
      />
      <ContactCallBack />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default EmptyProperty;
