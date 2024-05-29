import { faEnvelope, faLocationDot, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
const SidebarModalRight = (props) => {
  return (
    <>
      <div
        className={`sidebarModal modal right fade ${
          props.isopen ? "show" : ""
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={props.togglesidebar}
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <div className="modal-body">
              <Link to={"/"}>
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  We are a passionate team of skilled professionals dedicated to
                  crafting exceptional digital experiences for clients around
                  the globe. With years of industry experience and a commitment
                  to excellence, we pride ourselves on delivering innovative
                  solutions that exceed expectations. Our mission is simple: to
                  empower businesses, entrepreneurs, and individuals by
                  providing them with high-quality, custom web development
                  services. We believe that every project is an opportunity to
                  make a positive impact and help our clients achieve their
                  goals. Whether it's building a stunning website, optimizing
                  online presence, or solving complex technical challenges,
                  we're here to make it happen.
                </p>
                <div className="sidebar-btn">
                  <a
                    className="default-btn"
                    target="_blank"
                    href="https://t.me/sempanha123456"
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <a
                      href="tel:8550969845456"
                      target="_blank"
                      rel="noreferrer"
                    >
                      096 98 45 456
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <a
                      href="mailto:info@khmersolutions.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      info@khmersolutions.com
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    No. 41Eo, Street 210,
                    Sangkat ThekTla, Khan Sen Sok, Phnom Penh, Cambodia.
                  </li>
                </ul>
              </div>
              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559922759720&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/camgotech"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://t.me/camgotech"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/camgotech/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarModalRight;
