import React from "react";

import templateImage1 from "../../../assets/images/website/template-591-villa-agency.jpg";
import templateImage2 from "../../../assets/images/website/Topic Listing Template.jpg";
import templateImage3 from "../../../assets/images/website/Lugx Gaming Template.jpg";
import templateImage4 from "../../../assets/images/website/Ebook Landing Template.jpg";
import templateImage5 from "../../../assets/images/website/Tiya Golf Club Template.jpg";
import templateImage6 from "../../../assets/images/website/Scholar Template.jpg";
import templateImage7 from "../../../assets/images/website/Barber Shop Template.jpg";
import templateImage8 from "../../../assets/images/website/Pod Talk Template.jpg";


import { useParams } from "react-router-dom";



const DetailTemplate = () => {
  const {id} = useParams();

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



  const website = websites.find(website => website.id === parseInt(id));



  if(!website){
    return <p>Produt not found</p>;
  }
  return (
    <>
      <div className="blog-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  {/* <h2>{website.id}</h2> */}
                  <img
                    src={website.templateImage}
                    alt={website.title}
                  />
                </div>
                {/* <div className="article-share">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="share-content">
                        <a className="default-btn">
                          Live view
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul className="share-social text-end">
                        <li>
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?display=page&amp;u=https://camgotech.com/blog/15"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/share/url?url=https://camgotech.com/blog/15&amp;text=Tim Cook នាយក&ZeroWidthSpace;ប្រតិបត្តិ Apple រកប្រាក់ចំណូលបានត្រឹមតែ 63.2 លានដុល្លារកាលពីឆ្នាំ 2023"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-telegram-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/sharing/share-offsite/?url=https://camgotech.com/blog/15"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://api.whatsapp.com/send/?text=https://camgotech.com/blog/15&amp;type=custom_url&amp;app_absent=0"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-whatsapp-fill"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area">
                {/* <div className="widget widget_search">
                  <form className="search-form">
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search your article"
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div> */}
                <div className="widget widget_recent_post">
                  <h3 className="widget-title">Tittle</h3>
                  <h3>{website.title}</h3>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget-title">Descriptions</h3>
                  <article className="list">
                    <p style={{ fontSize: "19px" }}>{website.description}</p>
                  </article>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTemplate;
