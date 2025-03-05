import React from "react";
import SecurityServicebgImg from "../Components/SecurityServicebgImg";
import Navbar from "../Components/Navbar";
import FeatureService from "../Components/FeatureService";
import Footer from "../Components/Footer";
import ScrollButton from "../Components/ScrollButton";

function SecurityService() {
  return (
    <>
      <Navbar />
      <SecurityServicebgImg
        main="Security Services"
        aboutText="About Blue Elite Security offer a range of specialist security
                services to suit"
        secondText="your needs use the latest and best technology."
      />
      <FeatureService />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default SecurityService;
