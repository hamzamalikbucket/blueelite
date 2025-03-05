import React, { useEffect } from "react";
import "../Css Files/CardsStyle.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function SecurityCards() {
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
      <div className="container-fluid card-bg-img">
        <div className="overlay-cards"></div>
        <div className="row pt-5 security-cards justify-content-center">
          <div
            data-aos="zoom-in-right"
            className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3"
          >
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <div className="icon-bg">
                    <FaRegCheckCircle />
                  </div>
                </h5>
                <h6 className="card-subtitle mb-2">
                  <span>1.</span> Discuss your requirements
                </h6>
                <p className="card-text">
                  Contact us and talk to our security experts so they to gather
                  all information required to put together a conclusive security
                  proposal.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  <div className="icon-bg">
                    <FaFileSignature />
                  </div>
                </h5>
                <h6 className="card-subtitle mb-2">
                  <span>2.</span> Site security audit
                </h6>
                <p className="card-text">
                  All personnel servicing your contract are provided with
                  comprehensive training to ensure service delivery.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="col-lg-3 col-md-3 col-sm-3 col-12 mb-3"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <div className="icon-bg">
                    <FaUserShield />
                  </div>
                </h5>
                <h6 className="card-subtitle mb-2">
                  <span>3.</span> Property secure
                </h6>
                <p className="card-text">
                  All personnel servicing your contract are provided with
                  comprehensive training to ensure service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityCards;
