import React, { useEffect } from "react";
import "../Css Files/featureServices.css";
import { GrUserPolice } from "react-icons/gr";
import { IoKeyOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineEventAvailable } from "react-icons/md";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function FeatureService() {
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
        <div className="row feature-bg-gray">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="pt-5">
              <h2 className="text-center">OUR FEATURED SERVICES</h2>
              <p className="feature-text">
                We offer a comprehensive selection of security services.
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                <Link to="/securityGuard" className="anchor">
                  <div data-aos="zoom-in-up" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <GrUserPolice size={70} color=" #5271ff" />
                      </div>
                      <h3 className="card-title">Security Guards</h3>
                      <p className="card-subtitle text-center mb-2">
                        SIA licensed static
                      </p>
                      <p className="card-subtitle text-center mb-2">
                        Security Officers
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                <Link to="/keyholding" className="anchor">
                  <div data-aos="zoom-in-up" className="card shadow ">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <IoKeyOutline size={70} color="#5271ff" />
                      </div>
                      <p className="card-title">Key Holding</p>
                      <p className="card-subtitle text-center mb-2">
                        Key Holding
                      </p>
                      <p className="card-subtitle text-center mb-2">
                        Key holding offisers on stanby.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                <Link to="/events" className="anchor">
                  <div data-aos="zoom-in-up" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <MdOutlineEventAvailable size={70} color="#5271ff" />
                      </div>
                      <p className="card-title">Events</p>
                      <p className="card-subtitle text-center mb-2">
                        Event Security
                      </p>
                      <p className="card-subtitle text-center mb-2 ">
                        Secure Your Events with us
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center">
                <Link to="/emptyProperty" className="anchor">
                  <div data-aos="zoom-in-up" className="card shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <HiBuildingOffice2 size={70} color="#5271ff" />
                      </div>
                      <p className="card-title"> Empty Property</p>
                      <p className="card-subtitle text-center mb-2">
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

export default FeatureService;
