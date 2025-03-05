import React from "react";
import "../Css Files/contactCallBack.css";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import Slider from "react-slick";

function ContactCallBack() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid callback-bg">
        <div className="container">
          <div className="CallBack py-5">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                <div className="card first-card">
                  <div className="card-body">
                    <h5 className="card-title">CONTACT DETAILS</h5>
                    <h6 className="card-subtitle mb-2">
                      Get in touch with us using the details below
                    </h6>
                    <p class="card-text">
                      <FaPhone color="#5271ff" size={13} />{" "}
                      <span>+44 7448 445442</span>
                    </p>
                    <p className="card-text">
                      <IoMdMail color="#5271ff" size={13} />{" "}
                      <span>info@blueelite.co</span>
                    </p>
                    <p className="card-text">
                      <FaClock color="#5271ff" size={13} />{" "}
                      <span>Available 24 / 7 - 365</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                <div className="card second-card">
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      REQUEST A CALL BACK
                    </h5>
                    <h6 className="card-subtitle mb-2 text-white text-center">
                      Please leave your details and we’ll call you.
                    </h6>
                    <form action="">
                      <p className="card-text">
                        <input placeholder="Name / Company" type="text" />
                      </p>
                      <p className="card-text">
                        <input placeholder="Phone Number" type="text" />
                      </p>
                      <p className="card-text">
                        <input placeholder="Email" type="text" required />
                      </p>
                      <p className="card-text">
                        <input placeholder="Extra information" type="text" />
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Click to indicate that you have read and agree to our
                          privacy policy.
                        </label>
                      </div>
                      <button type="submit" className="callback-ctn">
                        Request Call-back
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                <div className="card third-card">
                  <div className="card-body">
                    <h5 className="card-title text-white">TESTIMONIALS</h5>
                    <h5 className="card-text text-white">
                      Read some kind words from our clients
                    </h5>
                    <div className="slider-container">
                      <Slider {...settings}>
                        <div>
                          <p>
                            Blue Elite Security are an excellent company to work
                            with, extremely competent and supportive. I would
                            definitely recommend this company.{" "}
                          </p>
                          <div>
                            <span className="blue">Kathryn C</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            Excellent Service and Fast Response Times. We have
                            used Blue Elite now for many years and found their
                            service to be responsive and sufficient. Would
                            highly recommend for Security needs.{" "}
                          </p>
                          <div>
                            <span className="blue">Kylie L</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            Excellent services you provide is always appreciated
                            for your professionalism and Quick response thank
                            you so much We will always use your services again
                            and again{" "}
                          </p>
                          <div>
                            <span className="blue">Abdulah S</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            Friendly and reliable company. Would definitely
                            recommend.
                          </p>
                          <div>
                            <span className="blue">RICHARD B</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                        <div>
                          <p>
                            I have worked with Blue Elite Security for a number of
                            years and would recommend their services. The team
                            at Blue Elite are committed, responsive and most
                            importantly reliable.
                          </p>
                          <div>
                            <span className="blue">Julie L</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                        <div>
                          <p>
                          Blue Elite have been our Security Company for going on 2
                            years now and I cannot fault them. They are really
                            responsive, friendly and just generally provide us
                            with everything we need.
                          </p>
                          <div>
                            <span className="blue">Ellie H</span>
                          </div>
                          <div>
                            <span className="text-white">HUDDERFIELDS</span>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCallBack;
