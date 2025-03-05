import React, { useEffect } from "react";
import AboutImg from "../Assets/Images/Aboutbg.jpg";
import "../Css Files/textImgStyle.css";
import SideImg from "../Assets/Images/AboutSide.avif";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
function AboutTextImg() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
      // Add more configuration options as needed
    });
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row pt-3 abouttextImg">
          <div
            data-aos="fade-down-right"
            className="col-lg-8 col-md-8 col-sm-12 col-12"
          >
            <h2>PHILOSOPHY, ETHICS AND PRINCIPLES</h2>
            <p className="img-text">
              At Blue Elite Security, we work within 2 key parameters when
              delivering our services to customers. These are to always deliver
              professional standards to our customers and at all times give the
              customer the best possible value for their money. This is becoming
              increasingly important with everyone facing such testing times.
              However security is still just as vital as ever in combating crime
              and health and safety issues raised by trespassers and any faults
              or damages to services causing floods, alarms or power failure.
            </p>
          </div>
          <div
            data-aos="fade-down-left"
            className="col-lg-4 col-md-4 col-sm-12 col-12"
          >
            <img className="right-image" src={AboutImg} alt="" />
          </div>
        </div>
        <div className="row my-5 abouttextImg">
          <div
            data-aos="fade-down-right"
            className="col-lg-4 col-lg-4 col-md-4 col-sm-12 col-12"
          >
            <img className="right-image" src={SideImg} alt="" />
          </div>
          <div data-aos="fade-down-left" className="col-lg-8 col-md-8 col-sm-12 col-12">
            <h2>OUR PROCESS</h2>
            <p className="img-text">
              Blue Elite Security (UK) Ltd have sites throughout
              Yorkshire/Lancashire and we pride ourselves on always dealing with
              clients on a face to face basis. A free of charge site visit and
              consultation will in every circumstance be carried out by a member
              of senior management prior to any contract being taken up. In this
              way Blue Elite Security ensures that clients are able to put a
              face to the name and any issues that they might have are dealt
              with quickly and efficiently by a contact that they know.
              Management is contactable on phone 24/7 and face to face follow up
              meetings can be arranged when necessary.
            </p>
          </div>
        </div>
        <div className="row">
          <div data-aos="fade-down-right" className="col-lg-8 col-md-8 col-sm-12 col-12">
            <h2>OUR BUSINESS RELATIONS</h2>
            <p className="img-text">
            Blue are in a position to handle contracts large and small in the professional manner that clients require. Our guards are trained to industry standards and are licensed in line with the Security Industry Act 2001. Our client portfolio includes large councils such as Kirklees and Calderdale and also large companies such as Marshall Construction and Gregory Properties who we have had working relationships with for a sustained period of time. We have also carried out gatehouse/concierge duties controlling access, deliveries and the signing in/out of all visitors and staff to companies such as High Seat Limited, Blackcat (Standard) Fireworks, Park Valley Mills Industrial Estate, TRU Property Investments Ltd, MOTUS DAFS Trucks, Marshall Construction and Huddersfield Rugby Union Club.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTextImg;
