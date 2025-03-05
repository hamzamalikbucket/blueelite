import React from "react";
import Slider from "react-slick";
import "../Css Files/SlickSlider.css";

function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid slider-bg">
        <div className="container slider-content">
          <Slider {...settings}>
            <div>
              <p className="text-size">
                Blue Elite have been our Security Company for going on 2 years
                now and I cannot fault them. They are really responsive,
                friendly and just generally provide us with everything we need.
                During Covid they also carried out additional visits at a
                minimal cost, which helped us put our minds at rest and
                reassured us the property (which is fairly remote) was safe.
                Can't recommend enough.{" "}
              </p>
              <p className="fw-bolder text-center">Kathryn Castile</p>
              <p className="text-center">Huddresfield</p>
            </div>
            <div>
              <p className="fs-5 text-center p-3">
                I have worked with Blue Elite Security for a number of years and
                would recommend their services. The team at Blue Elite are
                committed, responsive and most importantly reliable.
              </p>
              <p className="fw-bolder text-center">Julie Lord</p>
              <p className="text-center">Huddresfield</p>
            </div>
            <div>
              <p className="fs-5 text-center p-3">
                Excellent Service and Fast Response Times. We have used Blue
                Elite now for many years and found their service to be responsive
                and sufficient. Would highly recommend for Security needs.
              </p>
              <p className="fw-bolder text-center">Kylie Lang</p>
              <p className="text-center">Huddresfield</p>
            </div>
            <div>
              <p className="fs-5 text-center p-3">
                Blue Elite Security are an excellent company to work with,
                extremely competent and supportive. I would definitely recommend
                this company.
              </p>
              <p className="fw-bolder text-center">Kathryn Castile</p>
              <p className="text-center">Huddresfield</p>
            </div>
            <div>
              <p className="fs-5 text-center p-3">
                Excellent services you provide is always appreciated for your
                professionalism and Quick response thank you so much We will
                always use your services again and again
              </p>
              <p className="fw-bolder text-center">Abdulah Siad</p>
              <p className="text-center">Huddresfield</p>
            </div>
            <div>
              <p className="fs-5 text-center p-3">
                <div class="elementor-testimonial__text">
                  Friendly and reliable company. Would definitely recommend.{" "}
                </div>
              </p>
              <p className="fw-bolder text-center">Richard Bower</p>
              <p className="text-center">Huddresfield</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SlickSlider;
