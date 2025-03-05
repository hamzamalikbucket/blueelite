import React, { useEffect } from "react";
import "../Css Files/aboutbgStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutbg() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);
  return (
    <>
      <div className="container-fluid position-relative">
        <div className="aboutbg-overlay"></div>
        <div className="row bg-image">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="about-bg-text"
            >
              <p className="main">About Blue Elite Security</p>
              <p className="about-text">
                About Blue Elite Security Blue Elite Security (UK) Ltd are a
                family run business based in West
              </p>
              <p className="about-text">
                Yorkshire with over 40 years experience within the Security
                Industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutbg;
