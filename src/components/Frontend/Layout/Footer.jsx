import { faFacebook, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import money from "../../../assets/images/money-flow-8507486-6691626.webp";
import party from "../../../assets/images/Party-Popper-3d-icon.png";
import moneyfly from "../../../assets/images/moneyfly.webp";

const Footer = () => {







  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget"  >
                <h3>CAMGOTECH</h3>
                <p style={{ fontSize: '19px' }}>
                  We are ready to provide our best services to you with
                  reasonable cost and quality of services and the very best
                  solutions, and we look forward to having the chance to discuss
                  all your problems and what you need.
                </p>
                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/camgotech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/camgotech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5 ">
                <h3>Menu</h3>
                <ul className="quick-links">
                  <li>
                    <Link to={"/aboutus"} style={{ fontSize: '19px' }} >About Us</Link>
                  </li>
                  <li>
                    <Link to={"/services"} style={{ fontSize: '19px' }} >Services</Link>
                  </li>
                  <li>
                    <Link to={"/projects-demo"} style={{ fontSize: '19px' }} >OUR PROJECTS DEMO</Link>
                  </li>
                  <li>
                    <Link to={"/contactus"} style={{ fontSize: '19px' }} >Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5">
                <h3>Page</h3>
                <ul className="quick-links">
                  <li><Link to={"/"} style={{ fontSize: '19px' }} >FAQ's</Link></li>
                  <li>
                    <Link to={"/"} style={{ fontSize: '19px' }} >Terms of Service</Link>
                  </li>
                  <li>
                    <Link to={"/"} style={{ fontSize: '19px' }} >Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Our Facebook Page</h3>
                <div>
                  <div
                    className="fb-page fb_iframe_widget"
                    data-tabs="timeline"
                    data-href="https://www.facebook.com/camgotech"
                    data-height="230"
                    data-width="500"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="app_id=1014325969686728&amp;container_width=306&amp;height=230&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcamgotech&amp;locale=en_US&amp;sdk=joey&amp;tabs=timeline&amp;width=500"
                  >
                    <span
                      style={{
                        verticalAlign: 'bottom',
                        width: '306px',
                        height: '230px',
                      }}
                    >
                      <iframe
                        name="f221ceba804de566f"
                        width="500px"
                        height="230px"
                        data-testid="fb:page Facebook Social Plugin"
                        title="fb:page Facebook Social Plugin"
                        frameBorder="0"
                        allowTransparency="true"
                        allowFullScreen={true}
                        scrolling="no"
                        allow="encrypted-media"
                        src="https://www.facebook.com/v15.0/plugins/page.php?app_id=1014325969686728&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df6db5eb0b5c5bc07d%26domain%3Dcamgotech.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcamgotech.com%252Ffff19f3d6651e7408%26relation%3Dparent.parent&amp;container_width=306&amp;height=230&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcamgotech&amp;locale=en_US&amp;sdk=joey&amp;tabs=timeline&amp;width=500"
                        style={{
                          border: 'none',
                          visibility: 'visible',
                          width: '306px',
                          height: '230px',
                        }}
                        className=""
                      ></iframe>
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright @ 2024
                <Link to={"/"} target="_blank" rel="noreferrer">Khmersolution</Link>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="footer-shape-1">
          <img src={money} style={{ width: "90px"}} alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src={party} style={{ width: "90px"}} alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src={moneyfly}  style={{ width: "90px"}} alt="image" />
        </div>
      </footer>
     
      
    </>
  )
}

export default Footer
