import React, { useEffect, useState } from "react";
import Aos from "aos";

import Piccustomwebsite from "../../../assets/images/customwebsite.png";
import Picresponsivewebsite from "../../../assets/images/1.png";
import Picecomwebsite from "../../../assets/images/2.png";
import Picweddingwebsite from "../../../assets/images/3.png";
import shopimg from "../../../assets/images/shop.png";
const OurService = () => {
  const [truncatedState, setTruncatedState] = useState({});

  const handleClick = (id) => {
    setTruncatedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };



  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  const items = [
    {
      id: 1,
      picture: Piccustomwebsite,
      title: "Custom Website Development",
      description:
        "We specialize in creating custom websites that reflect your brand's identity and cater to your specific business requirements. From sleek and modern designs to complex functionalities, we ensure your website stands out and performs exceptionally well.",
    },
    {
      id: 2,
      picture: Picresponsivewebsite,
      title: "Responsive Web Design",
      description:
        "We design responsive websites that provide an optimal viewing experience across desktops, tablets, and smartphones. Ensuring your site looks great and works smoothly on all devices.",
    },
    {
      id: 3,
      picture: Picecomwebsite,
      title: "E-Commerce Web Application Solutions",
      description:
        "We build powerful e-commerce platforms that enhance your customers' shopping experience and drive sales growth for your online store with our robust e-commerce solutions.",
    },
    {
      id: 4,
      picture: Picweddingwebsite,
      title: "Wedding Websites Love",
      description:
        "We'll create a stunning digital platform where you can share your journey as a couple, showcase engagement photos, and provide essential details for your guests.",
    },
  ];

  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span data-aos="fade-down">OUR SERVICES</span>
            <h2 data-aos="fade-left" data-aos-delay="200">
              We offer a comprehensive range of services tailored to meet your
              unique needs.
            </h2>
            <p style={{ fontSize: "19px" }} data-aos="fade-up">
              With a commitment to quality, innovation, and client satisfaction,
              we strive to deliver exceptional web solutions that help you
              achieve your business goals.
            </p>
          </div>
          <div className="row justify-content-center">
            {items.map((item, index) => (
              <div
                className="col-lg-3 col-6"
                style={{ cursor: "pointer" }}
                key={item.id}
              >
                <div className="single-choose-card">
                  <div className="choose-image">
                    <img src={item.picture} alt={item.title} data-aos="fade-up" />
                  </div>
                  <div
                    className="choose-content"
                    onClick={() => handleClick(item.id)}
                  >
                    <h3>
                      <a href="#0" data-aos="fade-down">
                        {index + 1}. {item.title}
                      </a>
                    </h3>
                    <p
                      className={
                        truncatedState[item.id] ? "text-truncate3" : "text-truncate-3"
                      }
                      style={{ fontSize: "19px" }}
                      data-aos="fade-left"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="choose-shape-1">
          <img src={shopimg} style={{width: "90px" }} alt="shape" />
        </div>
        <div className="choose-shape-2">
          <img  alt="shape" />
        </div>
      </div>
    </>
  );
};

export default OurService;
