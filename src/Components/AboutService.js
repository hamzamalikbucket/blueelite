import React, { useEffect } from "react";
import "../Css Files/aboutService.css";
import { GrUserPolice } from "react-icons/gr";
import { IoKeyOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineEventAvailable } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function AboutService() {
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
        <div className="row my-5 px-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 about-service">
            <div>
              <h3>HOW CAN BLUE ELITE SECURITY HELP YOU?</h3>
              <p>
                We provide a range of security services and systems to help
                protect and deter criminals for attacking your home or business.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-sm-5 mb-3 d-flex justify-content-center">
                <Link to="/securityGuard" className="anchor-about">
                  <div data-aos="flip-up" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <GrUserPolice size={70} color="#5271ff" />
                      </div>
                      <h3 className="card-title">Security Guards</h3>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        SIA licensed static
                      </p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Security Officers
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                <Link to="/keyholding" className="anchor-about">
                  <div data-aos="flip-up" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <IoKeyOutline size={70} color=" #5271ff" />
                      </div>
                      <p className="card-title">Key Holding</p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Key Holding
                      </p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Key holding offisers on stanby.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-sm-5 mb-3 d-flex justify-content-center">
                <Link to="/events" className="anchor-about">
                  <div data-aos="flip-down" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <MdOutlineEventAvailable size={70} color=" #5271ff" />
                      </div>
                      <p className="card-title">Events</p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Event Security
                      </p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Secure Your Events with us
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                <Link to="/emptyProperty" className="anchor-about">
                  <div data-aos="flip-down" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <HiBuildingOffice2 size={70} color="#5271ff" />
                      </div>
                      <p className="card-title"> Empty Property</p>
                      <p className="card-subtitle text-center mb-2 text-muted">
                        Protect your void <br /> proprty
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutService;
