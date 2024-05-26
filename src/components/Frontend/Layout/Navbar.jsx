import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faGrinBeam, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/images/logo/logo.png";

import { useLocation, Link } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

const [Isvisible, setIsVisible] = useState(false);


const FunVisible = () => {
  if (window.pageYOffset > 300) {
    setIsVisible(true);

  } else {
    setIsVisible(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', FunVisible);

  return () => {
    window.addEventListener('scroll', FunVisible);
  };
  
},[]);

  return (
    <>
      <header className="main-header-area">
        <div  className={`navbar-area ${Isvisible ? "is-sticky" : ""}`}>
          <div className="main-navbar navbar-with-black-color">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to={"/"} className="navbar-brand">
                  <img className="logo" src={logo} alt="Logo" />
                </Link>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/aboutus" className={`nav-link ${isActive('/aboutus') ? 'active' : ''}`}>ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>SERVICES</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/projects-demo" className={`nav-link ${isActive('/projects-demo') ? 'active' : ''}`}>OUR PROJECTS DEMO</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contactus" className={`nav-link ${isActive('/contactus') ? 'active' : ''}`}>CONTACT US</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="others-options d-none d-md-flex align-items-center"
                  onClick={props.togglesidebar}
                >
                  <div className="option-item">
                    <div className="side-menu-btn">
                      {/* <FontAwesomeIcon icon={faListAlt} /> */}
                      <FontAwesomeIcon icon={faBars} />
                    </div>
                  </div>
                </div>
                <div
                  className="others-options d-flex d-md-none align-items-center"
                  onClick={props.togglesidebarleft}
                >
                  <div className="option-item">
                    <div className="side-menu-btn">
                      <FontAwesomeIcon icon={faBars} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
