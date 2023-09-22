import React from "react";
import HeroSection from "../components/HeroSection";

import laptop from "./../assets/images/laptop.jpeg";
import iphone from "./../assets/images/iphone.jpeg";
import FeatureProduct from "../components/FeatureProduct";

const Home = () => {
  return (
    <>
      <HeroSection
        title="Buy Iphone 14 pro"
        subtitle=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatum, quasi quos obcaecati."
        link="/"
        image={iphone}
      />
      <FeatureProduct />
      <HeroSection
        title="Buy Macbook pro"
        subtitle=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatum, quasi quos obcaecati."
        link="/"
        image={laptop}
      />
    </>
  );
};

export default Home;
