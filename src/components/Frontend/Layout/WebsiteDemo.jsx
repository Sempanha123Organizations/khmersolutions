import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import templateImage1 from "../../../assets/images/website/template-591-villa-agency.jpg";
import templateImage2 from "../../../assets/images/website/Topic Listing Template.jpg";
import templateImage3 from "../../../assets/images/website/Lugx Gaming Template.jpg";
import templateImage4 from "../../../assets/images/website/Ebook Landing Template.jpg";
import templateImage5 from "../../../assets/images/website/Tiya Golf Club Template.jpg";
import templateImage6 from "../../../assets/images/website/Scholar Template.jpg";
import templateImage7 from "../../../assets/images/website/Barber Shop Template.jpg";
import templateImage8 from "../../../assets/images/website/Pod Talk Template.jpg";

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
    {
      id: 4,
      title: "Ebook Landing Template",
      description:
        "This template is an ebook landing page or one-page layout for digital books. There are 6 different sections including content tabs.",
      templateImage: templateImage4,
    },
    {
      id: 5,
      title: "Tiya Golf Club Template",
      description:
        "This template is suitable for your golf course websites. There are curvy shapes, membership tables, login form, email form, event listing page, and event detail page. Member Login slides in from the right side. Dropdown menu is included. First page can be used as one-page scrolling sections.",
      templateImage: templateImage5,
    },
    {
      id: 7,
      title: "Scholar Template",
      description:
        "Scholar is designed for educational or online learning websites. Template design is created on rounded shapes in purple and white colors. It is provided as one-page template and can be expanded further as multi-page website. There are different sections with accordion, slider, gallery, etc.",
      templateImage: templateImage6,
    },
    {
      id: 8,
      title: "Barber Shop Template",
      description:
        "Gentlemen's Barber Shop is  template for your business. This one-page layout has a sidebar navigation menu. Right column is the main content area for different sections including about us, services, price list, etc. Booking Form is included. There is also a contact section with Google Maps.",
      templateImage: templateImage7,
    },
    {
      id: 9,
      title: "Pod Talk Template",
      description:
        "Pod Talk features a beautiful ocean blue gradient waves in the header and footer designs. Homepage has a banner slider for artists or podcasters. Also, listing page and detail page are included. Contact form and maps are also provided. This template has a dropdown menu which is suitable for multiple-page websites. Header has a search box and footer has a newsletter subscription form.",
      templateImage: templateImage8,
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
