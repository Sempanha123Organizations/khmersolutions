import React, { useEffect } from "react";
import image from "../../../assets/images/about.png";
import party from "../../../assets/images/party-popper-5653028-4708284.webp";
import Aos from "aos";

const AboutUs = () => {

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span data-aos="fade-down">ABOUT US</span>
            <p data-aos="fade-left" style={{ fontSize: "19px" }}>
              We believe in building strong relationships with our clients and
              understanding their unique needs to deliver tailored solutions.
            </p>
          </div>
          <div className="row align-items-center">
            
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3 data-aos="fade-right">
                  Welcome to <b>Khmer Solutions</b> Freelance Web Development!
                </h3>
                <p data-aos-delay="300" data-aos="fade-right" style={{ fontSize: "19px" }}>
                  We are a passionate team of skilled professionals dedicated to
                  crafting exceptional digital experiences for clients around
                  the globe. With years of industry experience and a commitment
                  to excellence, we pride ourselves on delivering innovative
                  solutions that exceed expectations.
                  <br />
                  Our mission is simple: to empower businesses, entrepreneurs,
                  and individuals by providing them with high-quality, custom
                  web development services. We believe that every project is an
                  opportunity to make a positive impact and help our clients
                  achieve their goals. Whether it's building a stunning website,
                  optimizing online presence, or solving complex technical
                  challenges, we're here to make it happen.
                </p>
                <div className="about-btn" data-aos-delay="200" data-aos="fade-down">
                  <a className="default-btn">
                    Know More About Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-aos="fade-left" data-aos-delay="200">
                <img 
                  className="d-lg-inline-block"
                  src={image}
                  alt="Camgotech, who we are, We are All Services of IT solution & digital marketing"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1 footer-shape-2">
          <img src={party} style={{ width: "90px"}} alt="shape" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
