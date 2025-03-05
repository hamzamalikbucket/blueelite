import React, { useEffect } from "react";
import "../Css Files/navbarStyle.css";
import logo from "../Assets/Images/blueeliteLogo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link className="ms-4 navbar-brand" to="/">
            <img src={logo} alt="" height={120} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <FaBars color="#5271ff" />
            </span>
          </button>
          <div
            className="justify-content-center collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-center"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="dropdown nav-item">
                <Link className="nav-link" to="/securityServices">
                  SECURITY SERVICES
                </Link>
                <div className="dropdown-content">
                  <Link to="/securityGuard">Security Guard</Link>
                  <Link to="/keyholding">Key Holding</Link>
                  <Link to="/emptyProperty">Empty Property Security</Link>
                  <Link to="/events">Events</Link>
                  <Link to="/cctv">CCTV MOBILE PATROL</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="animated-button" data-aos="fade-up-left">
            <Link to="/contactUs">
              <button className="navbar-ctn">
                <FaPhoneVolume /> +44 7448 445442
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
