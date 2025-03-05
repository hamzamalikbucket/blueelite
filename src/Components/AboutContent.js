import React, { useEffect } from "react";
import "../Css Files/aboutContentStyle.css";
import { IoChevronForward } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      onset: 200,
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <h3 className="heading">Why Choose Blue Elite Security?</h3>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 aboutContent">
            <li>
              <span className="fw-bolder">
                Unwavering Commitment to Excellence:
              </span>{" "}
              We are passionate about exceeding your expectations, delivering
              exceptional service with professionalism, integrity, and
              unwavering dedication.
            </li>
            <li>
              <span className="fw-bolder">
                Experienced and Qualified Personnel:
              </span>{" "}
              Our security guards are rigorously vetted, extensively trained,
              and possess the necessary skills and qualifications to handle
              diverse security situations effectively.
            </li>
            <li>
              <span className="fw-bolder">Tailored Security Solutions:</span> We
              understand that every event and corporate setting has unique
              security needs. We work closely with you to assess your specific
              requirements and develop a customized security plan that meets
              your budget and objectives.
            </li>
            <li>
              <span className="fw-bolder">Advanced Security Technology:</span>{" "}
              We leverage cutting-edge technology to enhance our security
              operations, ensuring a comprehensive and proactive approach to
              safeguarding your people and assets.
            </li>
            <li>
              <span className="fw-bolder">Exceptional Customer Service:</span>{" "}
              We prioritize clear communication, responsiveness, and a
              collaborative approach, ensuring you are consistently informed and
              involved throughout the security process.
            </li>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
            <div data-aos="fade-left" className="bullets-bg">
              <p className="icon-text">
                <IoChevronForward color="black" />
                Over 40 years' experience in the security industry
              </p>
            </div>
            <div data-aos="fade-left" className="bullets-bg">
              <p className="icon-text">
                <IoChevronForward color="black" />
                Bespoken security packages to suit your needs
              </p>
            </div>
            <div data-aos="fade-left" className="bullets-bg">
              <p className="icon-text">
                <IoChevronForward color="black" />
                Smart, professional and courteous
              </p>
            </div>
            <div data-aos="fade-left" className="bullets-bg">
              <p className="icon-text">
                <IoChevronForward color="black" />
                Trusted and contracted by many prestigious companies
              </p>
            </div>
            <div data-aos="fade-left" className="bullets-bg">
              <p className="icon-text">
                <IoChevronForward color="black" />
                Confidential and discreet service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
