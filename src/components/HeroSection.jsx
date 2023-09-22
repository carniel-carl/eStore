import React from "react";

import "./../assets/styles/HeroSection.scss";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2 className="hero_title">{title}</h2>
        <p className="hero_subtitle">{subtitle}</p>
        <a href={link} className="hero_btn">
          Buy Now
        </a>
      </div>
      <div>
        <img src={image} alt="iphone" className="hero_img" />
      </div>
    </section>
  );
};

export default HeroSection;
