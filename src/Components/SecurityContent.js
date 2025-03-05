import React, { useEffect } from "react";
import "../Css Files/securityContent.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SecurityContent(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="security-content">
          <div className="row p-3 my-5">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <h3 className="content-heading">{props.ContentHeading}</h3>
              <p className="content-paragraph">{props.ContentParagraph}</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <img src={props.Image1} alt="" />
            </div>
          </div>
          <div className="row p-3 my-3">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <img src={props.Image2} alt="" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-6 col-md-6 col-sm-12 col-12"
            >
              <h3 className="content-heading">{props.ContentHeading2}</h3>
              <p className="content-paragraph">
                {props.ContentParagraph2}
                <div className="points">
                  <p className="points">{props.Point1}</p>
                  <p className="points">{props.Point2}</p>
                  <p className="points">{props.Point3}</p>
                  <p className="points">{props.Point4}</p>
                  <p className="points">{props.Point5}</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityContent;
