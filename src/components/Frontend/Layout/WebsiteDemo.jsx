import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import templateImage1 from "../../../assets/images/website/template-591-villa-agency.jpg";
import templateImage2 from "../../../assets/images/website/Topic Listing Template.jpg";
import templateImage3 from "../../../assets/images/website/Lugx Gaming Template.jpg";
import shapeimg1 from "../../../assets/images/gold-dollar.png";
import party from "../../../assets/images/Party-Popper-3d-icon.png";

import Aos from "aos";
const WebsiteDemo = () => {
  const websites = [
    {
      id: 1,
      title: "Villa Agency Template",
      description:
        "There are Property Listing page and Property Detail page. Property Listing categorized different properties by apartment, villa house, and penthouse. Contact page includes simple contact form with name, email, subject, and message text fields. Google Maps section can be easily edited for your own location map point",
      templateImage: templateImage1,
    },
    {
      id: 2,
      title: "Topic Listing Template",
      description:
        "detail and contact. Homepage features many sections such as search bar, content tabs, timeline, accordion, etc. This layout used Teal or DarkCyan color gradients.",
      templateImage: templateImage2,
    },
    {
      id: 3,
      title: "Lugx Gaming Template",
      description:
        "There are 4 different HTML pages including home page, shop catalog page, product detail page, and contact page. Shop page includes categories and paging. Contact Form and Maps are included in contact page.",
      templateImage: templateImage3,
    },

  ];

  const [truncate, Settrucate] = useState(null);

  const handleClick = (id) => {
    Settrucate((prev => (prev === id ? null : id)));
 
  };

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span data-aos="fade-down">HERE DEMO WEBSITE</span>
            <h2 data-aos="zoom-in">
              Our best <b>demo website</b> all kinds of your business
            </h2>
            <p style={{ fontSize: "19px" }} data-aos="fade-right">
              we understand that a powerful online presence is crucial for the
              success of any business. That's why we've created this demo
              website to showcase our expertise in building versatile,
              user-friendly, and visually stunning websites for all types of
              businesses.
            </p>
          </div>
          <div className="row">
            {websites.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="services-item">
                  <div className="services-image">
                    <Link to={`/projects-demo/${item.id}`}>
                      <img src={item.templateImage} alt="Software Development" />
                    </Link>
                  </div>
                  <div className="services-content" >
                    <h3>
                      <a className="text-truncate" style={{ width: "100%" }}>
                        {item.title}
                      </a>
                    </h3>
                    <p className={ truncate === item.id ? "text-truncate3" : "text-overflow-3"} style={{ fontSize: "18px" }} onClick={() => handleClick(item.id)}> 
                      {item.description}
                    </p>
                    <Link
                      to={`/projects-demo/${item.id}`}
                      className="services-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pricing-bg-shape-1">
          <img src={party}  alt="image"style={{ width: "120px"}} />
        </div>
        <div className="pricing-shape-1">
          <img src={shapeimg1} alt="image" style={{ width: "120px"}} />
        </div>
      </div>
    </>
  );
};

export default WebsiteDemo;
