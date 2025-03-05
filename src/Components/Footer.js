import React, { useEffect } from "react";
import "../Css Files/footerStyle.css";
import FooterLogo from "../Assets/Images/blueeliteLogo.png";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);
  return (
    <>
      <div className="container-fluid footer-bg">
        <div className="row py-5">
          <div
            data-aos="zoom-in-right"
            className="col-lg-3 col-md-3 col-sm-12 col-12"
          >
            <Link to="/">
              <img src={FooterLogo} height={200} alt="" />
            </Link>
          </div>
          <div
            data-aos="zoom-in-right"
            className="col-lg-3 col-md-3 col-sm-6 col-6"
          >
            <p className="footer-heading ms-4">CONTACT</p>
            <ul className="order-list">
              <li className="footer-list">
                <FaPhone /> +44 7448 445442
              </li>
              <li className="footer-list">
                <IoIosMail size={20} /> info@blueelite.co
              </li>
              <li className="footer-list">
                <FaLocationArrow /> Flat 1 334,katherine St. Ashton-under-lyne
                Greater Machester
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-right"
            className="col-lg-3 col-md-3 col-sm-12 col-12"
          >
            <p className="footer-heading ms-4">LINKS</p>
            <ul className="order-list">
              <Link to="/about">
                <li className="footer-list">About</li>
              </Link>
              <Link to="/contactUs">
                <li className="footer-list">Contact</li>
              </Link>
              {/* <p className="footer-heading pt-2">LEGAL</p>
              <a href="">
                <li className="footer-list">Terms & Conditions</li>
              </a>
              <a href="">
                <li className="footer-list">Privacy Policy</li>
              </a> */}
            </ul>
          </div>
          <div
            data-aos="zoom-in-right"
            className="col-lg-3 col-md-3 col-sm-12 col-12"
          >
            <p className="footer-heading ms-4">SERVICES</p>
            <ul className="order-list">
              <Link to="/cctv">
                <li className="footer-list">CCTV Monitoring</li>
              </Link>
              <Link to="/securityGuard">
                <li className="footer-list">Security Guards</li>
              </Link>
              <Link to="/events">
                <li className="footer-list">Events</li>
              </Link>
              <Link to="/keyholding">
                <li className="footer-list">Key Holding</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="row m-3">
          <p>
        
          <a
              className="footer-link"
              href="http://www.sentaxlab.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              © Sentax Lab 2024.
            </a>{" "}
            Designed and Developed by{" "}
            <a
              className="footer-link"
              href="http://www.sentaxlab.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sentax Lab
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
