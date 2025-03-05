import React, { useEffect } from "react";
import "../Css Files/contentStyle.css";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Content(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);
  const containerStyle = {
    backgroundColor: props.containerBackgroundColor,
  };
  return (
    <>
      <div className="container-fluid py-5" style={containerStyle}>
        <div className="row my-4  m-3">
          <div
            data-aos="fade-right"
            className="col-lg-4 col-md-4 col-sm-4 col-12 mt-4"
          >
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p className="fw-bolder">{props.hometext}</p>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-12 mt-4">
            <p data-aos="fade-left" className="home-content">
              {props.homeContent}
            </p>
            <Link to="/securityServices">
              <button data-aos="fade-up-left" className="about-btn">
                {props.btn} <IoChevronForwardOutline />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
