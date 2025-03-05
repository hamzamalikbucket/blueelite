import React, { useEffect } from "react";
import "../Css Files/contactform.css";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Contactform() {
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
        <div className="row my-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 py-5">
            <div data-aos="fade-up-right" className="contact-wrapper">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    <FaPhone color="#5271ff" />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-center">
                    <Link to="">Have a question? Call us now</Link>
                  </h6>
                  <p class="card-text">+44 7448 445442</p>
                  <h5 class="card-title">
                    <IoMdMail color="#5271ff" />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-center">
                    <Link to="">Send us an email</Link>
                  </h6>
                  <p class="card-text"> info@blueelite.co</p>
                  <p class="card-text"> operations@blueelite.co</p>
                  <p class="card-text"> control@blueelite.co</p>
                  <p class="card-text"> admin@blueelite.co</p>
                  <h5 class="card-title">
                    <FaClock color="#5271ff" />
                  </h5>
                  <h6 class="card-subtitle mb-2 text-center">
                    We're always available
                  </h6>
                  <p class="card-text">Available 24 / 7 - 365</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12  py-5 d-flex align-items-center">
            <div className="wrapper-form">
              <form action="">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">GET IN TOUCH</h5>
                    <h6 class="card-subtitle mb-2">
                      Do you have an urgent need for security? Complete the
                      below contact form and a member of our team will call you
                      straight away.Card subtitle
                    </h6>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
                        <input placeholder="Name" type="text" required />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
                        <input placeholder="Company" type="text" required />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
                        <input
                          placeholder="phone Number"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <input placeholder="Email" type="text" required />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder="Leave a Message here"
                            id="floatingTextarea2"
                          ></textarea>
                          <label for="floatingTextarea2">Message</label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="contact-btn">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactform;
