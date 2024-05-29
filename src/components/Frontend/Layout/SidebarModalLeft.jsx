import { faEnvelope, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo/logo.png";

const SidebarModalLeft = (props) => {

  const location = useLocation();

  const IsActive = (path) => location.pathname === path;




  return (
    <>
      <div className={`sidebarModal modal left fade ${props.isopenleft ? 'show' : ''} `}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={props.togglesidebarleft}>
<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
            <div className="modal-body">
              <Link to={"/"}>
                <img className="logo" src={logo} />
              </Link>
              <div className="sidebar-content">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <Link to={"/"} className={`nav-link ${IsActive('/') ? "active" : ""}`}>
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/aboutus"} className={`nav-link ${IsActive('/aboutus') ? "active" : ""}`} >
                      ABOUT US
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/services"} className={`nav-link ${IsActive('/services') ? "active" : ""}`} >
                      SERVICE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/projects-demo"} className={`nav-link ${IsActive('/projects-demo') ? "active" : ""}`} >
                    OUR PROJECTS DEMO
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contactus"} className={`nav-link ${IsActive('/contactus') ? "active" : ""}`} >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>
                <ul className="info-list">
                  <li>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <a href="tel:855096 98 45 456">096 98 45 456</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <a href="mailto:info@khmersolutions.com">info@khmersolutions.com</a>
                  </li>
                </ul>
              </div>
              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559922759720&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >

                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >

                  </a>
                </li>
                <li>
                  <a
                    href="https://www.telegram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >

                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <i className="ri-linkedin-fill"></i> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarModalLeft;
