import React, { useEffect } from "react";
import "../Css Files/securityGuardImg.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SecurityGuardImg(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      onset: 200,
    });
  }, []);
  return (
    <>
      <div className="container-fluid position-relative">
        <div className="Security-imgOverlay"></div>
        <div className="row service-bg-image">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div data-aos="fade-right" className="about-bg-text">
              <p className="main">{props.securityheading}</p>
              <p className="about-text">{props.securityText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityGuardImg;
