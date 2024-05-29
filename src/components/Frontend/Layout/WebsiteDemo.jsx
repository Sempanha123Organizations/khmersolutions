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
import templateImage9 from "../../../assets/images/website/Stand Blog Template.jpg";
import templateImage10 from "../../../assets/images/website/Eatery Template.jpg";
import templateImage11 from "../../../assets/images/website/Zigzag Template.jpg";
import templateImage12 from "../../../assets/images/website/KLINIK FREE CSS TEMPLATE.png";
import templateImage13 from "../../../assets/images/website/Logistica – Shipping Company Website Template.png";
import templateImage14 from "../../../assets/images/website/Company Website Template.png";
import templateImage15 from "../../../assets/images/website/SEO Master – SEO Agency Website Template.png";
import templateImage16 from "../../../assets/images/website/Gymnast – Gym & Fitness Website Template.png";
import templateImage17 from "../../../assets/images/website/Fruitables – Vegetable Website Template.png";
import templateImage18 from "../../../assets/images/website/Hairnic – Single Product Website Template.png";
import templateImage19 from "../../../assets/images/website/MultiShop – Online Shop Website Template.png";
import templateImage20 from "../../../assets/images/website/Securex – CCTV Camera Website Template.png";
import templateImage21 from "../../../assets/images/website/Baker – Cake & Bakery Website Template.png";

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
    {
      id: 10,
      title: "Stand Blog Template",
      description:
        "Single blog post, blog entries page, about page, contact page, and main slider page. This 2-column blog layout can be used for multiple website purposes.",
      templateImage: templateImage9,
    },
    {
      id: 11,
      title: "Eatery Template",
      description:
        "Eatery is a cafe and restaurant website CSS template. It includes a beautiful image slider, a hover zoom image gallery, and white background sections.",
      templateImage: templateImage10,
    },
    {
      id: 12,
      title: "Zigzag Template",
      description:
        "ZigZag uses diagonal background layers to make attractive design. ZigZag is suitable for websites with minimal contents.",
      templateImage: templateImage11,
    },
    {
      id: 13,
      title: "KLINIK  TEMPLATE",
      description:
        "KLINIK  TEMPLATE is a doctor or nurse website  template. It includes a beautiful image suitable for websites, and white background sections.",
      templateImage: templateImage12,
    },
    {
      id: 14,
      title: "Logistica – Shipping Company Website Template",
      description:
        "Logistica is a stylish, modern, powerful, and free logistics & shipping company website template with a professional design perfect for any trucking agency, transport bureau, logistics firm, and cargo business. It also fits warehousing, transportation, corporate shipping company, package delivery, and freight services websites.",
      templateImage: templateImage13,
    },
    {
      id: 15,
      title: "Company Website Template",
      description:
        "A very lightweight and fully responsive IT company website template that is suitable to build a business website for software companies or any other companies. This pre-built HTML template is made with the Bootstrap 4 framework that is very easy to customize and use to create a modern and good looking website.",
      templateImage: templateImage14,
    },
    {
      id: 16,
      title: "SEO Master – SEO Agency Website Template",
      description:
        "SEO Master is a powerful, easy to use, and highly customizable free SEO agency website template specially designed for SEO, SEM, SaaS, B2B, Startup, digital marketing, email marketing, tech agency, IT business, and corporate websites. The template is fully responsive and looks awesome on tablets and mobile devices. You can use this free HTML template to build your SEO & digital marketing related business website. Creating an agency website from scratch may be a challenging task. With SEO Master – our free SEO agency HTML template, you can easily build a multi-page or one page SEO agency website with no hassle at all. This free template is built with HTML5, CSS3, and Bootstrap v5 framework. It comes with well-commented and developer-friendly coding structure that will help you to create an impactful agency website easily without having extra coding knowledge.",
      templateImage: templateImage15,
    },
    {
      id: 17,
      title: "Gymnast – Gym & Fitness Website Template",
      description:
        "People are more health-conscious. They are always alert about their fitness. They try to keep a part in their daily lives to exercise at least 30 minutes a day. Nowadays, the gym and fitness centers are being more popular and using online to reach more audiences. We are here with our best free gym website template you can download and use to build an unstoppable online presentation for your gym or fitness center.You may know that there are different online platforms to reach the audience. For example, you can choose YouTube videos or social media to reach your target audience. But you can’t imagine how a professional website for your gym and fitness center will help you to reach your target audience. Your website built using our gym web template will help you to achieve more audiences, maintain a professional business portfolio, and join users to your gym classes easily. GYMNAST is a fresh and modern gym HTML website template perfectly suitable for gym centers, fitness clubs, yoga classes, pilates trainers, personal trainers, and any other health and fitness-related websites. This template comes with a unique, creative, and professional look that will help you to promote your gym and fitness center and get as many customers as possible.",
      templateImage: templateImage16,
    },
    {
      id: 18,
      title: "Fruitables – Vegetable Website Template",
      description:
        "Fruitables comes with a responsive and mobile-friendly design that adapts flawlessly to all modern devices. It ensures a seamless shopping experience for your customers across desktops, laptops, tablets, and smartphones. You can showcase your fresh fruits and vegetables with stunning visuals. This free website template provides pre-designed product showcase sections that allow you to present your organic fruits and vegetables with product images, detailed descriptions, and pricing information.",
      templateImage: templateImage17,
    },
    {
      id: 19,
      title: "Hairnic – Single Product Website Template",
      description:
        "Hairnic is a free single product website template crafted to showcase your beauty and cosmetic products. With its clean and responsive design, we have poured our hearts into creating it. We ensure that Hairnic will assist you in promoting and expanding your business, serving as an ideal HTML website template for presenting your modern business. It suits various single-product businesses, including beauty products, cosmetics, skincare items, haircare products, electronics, digital goods, and much more.",
      templateImage: templateImage18,
    },
    {
      id: 20,
      title: "MultiShop – Online Shop Website Template",
      description:
        "MultiShop is a free online shop website template specially designed for fashion, clothes, bags, shoes, jewelry, diamond, sports, electronics, computers, mobile, tools, home goods, gadgets, food, coffee, chocolate, cake, and multipurpose e-commerce store websites. The template is looking good with great colors combination and its clean, modern, and responsive layout. This online store website template is perfect for small to medium business owners who want to sell their products online.",
      templateImage: templateImage19,
    },
    {
      id: 21,
      title: "Securex – CCTV Camera Website Template",
      description:
        "Securex is a professional and mobile-friendly free CCTV camera website template that has a beautiful and unique design and will be the best suited for your online web presence. It has a fully responsive layout and tested on all major handheld devices. Securex comes with all necessary features for your online presence like service, project, company features, quote form, testimonial, team page, etc. Securex – free CCTV camera HTML template suited for all security companies and agencies who offer various security-related services like CCTV camera, IP camera, video camera, digital door lock, security camera, home automation, security guard, safeguard, bodyguard, surveillance camera, video surveillance, event security, etc.",
      templateImage: templateImage20,
    },
    {
      id: 22,
      title: "Baker – Cake & Bakery Website Template",
      description:
        "Baker – free cake & bakery shop template is specially designed for bakery, cake shop & pastry store, coffee shop, ice cream shop, chocolate, pizza, burger, restaurant, yogurt, biscuit, cake designer, and other similar food business websites. It’s extremely easy to use and perfect for beginners.",
      templateImage: templateImage21,
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
