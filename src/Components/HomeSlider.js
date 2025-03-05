import React, { useEffect } from "react";
import "../Css Files/homeSlider.css";
import firstSlide from "../Assets/Images/FirstSlide.jpg";
import secondSlide from "../Assets/Images/SecondSlide.jpg";
import thirdSlide from "../Assets/Images/ThirdSlide.jpg";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      onset: 200,
    });
  }, []);
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay"></div>
            <img
              src={firstSlide}
              height={450}
              className="d-block w-100"
              alt="..."
            />
            <div data-aos="fade-right" className="carousel-caption">
              <h6>Commercial - Domestic - Industrial​</h6>
              <h1>PROTECT YOUR</h1>
              <h1>HOME & BUSINESS</h1>
              <div className="d-flex">
                <Link to="/securityServices">
                  <button className="btn">
                    Services <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
                <Link to="/contactUs">
                  <button className="btn ms-4">
                    Contact us <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={secondSlide}
              height={450}
              className="d-block w-100"
              alt="..."
            />
            <div data-aos="fade-right" className="carousel-caption">
              <h6>Commercial - Domestic - Industrial​</h6>
              <h1>PROTECT YOUR</h1>
              <h1>HOME & BUSINESS</h1>
              <div className="d-flex">
                <Link to="/securityServices">
                  <button className="btn">
                    Services <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
                <Link to="/contactUs">
                  <button className="btn ms-4">
                    Contact us <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img
              src={thirdSlide}
              height={450}
              className="d-block w-100"
              alt="..."
            />
            <div data-aos="fade-right" className="carousel-caption">
              <h6>Commercial - Domestic - Industrial​</h6>
              <h1>PROTECT YOUR</h1>
              <h1>HOME & BUSINESS</h1>
              <div className="d-flex">
                <Link to="/securityServices">
                  <button className="btn">
                    Services <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
                <Link to="/contactUs">
                  <button className="btn ms-4">
                    Contact us <IoChevronForwardOutline className="mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HomeSlider;
