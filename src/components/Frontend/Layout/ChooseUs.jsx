import React, { useEffect } from 'react';

import fea1 from '../../../assets/images/fea1.png';
import fea2 from '../../../assets/images/fea2.png';
import fea3 from '../../../assets/images/fea3.png';
import fea4 from '../../../assets/images/fea4.png';
import fea5 from '../../../assets/images/fea5.png';
import fea6 from '../../../assets/images/fea6.png';
import feaback from '../../../assets/images/fea-back.png';
import feaback1 from '../../../assets/images/fea-back1.png';
import feacenter from '../../../assets/images/fea-center.png';
import party from "../../../assets/images/Party-Popper-3d-icon.png";

import Aos from 'aos';
const ChooseUs = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="fea-bg pt-100 pb-75">
        <div className="container-fluid">
          <div className="section-title">
            <span data-aos="fade-down">WHY CHOOSE US</span>
            <h2 data-aos="fade-up" data-aos-delay="200">We believe in building <b>strong</b> relationships with our clients</h2>
            <p style={{ fontSize: '19px' }} data-aos="fade-right">
              and understanding their unique needs to deliver tailored solutions.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="fea">
              <div className="fea1">
                <div className="row">
                  
                  <div className="col-lg-5">

                    <div className="fea_block fea_block_right">
                      <div className="fea_block_content">
                        <div className="fea-img" data-aos="fade-right">
                          <img src={fea1} className="sub-img1 heartbeat" alt="feature 1"  />
                          <img src={feaback}  className="sub-img2" alt="feature background"/>
                        </div>
                        <h3 data-aos="fade-down" data-aos-delay="200">1. Customized Solutions</h3>
                        <p data-aos="fade-up" data-aos-delay="400">We understand that every project is unique. Our approach is tailored to meet your individual requirements.</p>
                      </div>
                    </div>

                    <div className="fea_block fea_block_right">
                      <div className="fea_block_content">
                        <div className="fea-img" data-aos="fade-right">
                          <img src={fea2} className="sub-img1 heartbeat" alt="feature2"/>
                          <img src={feaback}  className="sub-img2" alt="feature background"/>
                        </div>
                        <h3 data-aos="fade-down" data-aos-delay="200">2. Expertise and Quality</h3>
                        <p data-aos="fade-up" data-aos-delay="400"> We uphold strict quality standards by selecting only top freelancers with exceptional skills and a proven track record of success.</p>
                      </div>
                    </div>

                    <div className="fea_block fea_block_right">
                      <div className="fea_block_content">
                        <div className="fea-img">
                          <img src={fea3} className="sub-img1 heartbeat" alt="feature 3"/>
                          <img src={feaback} className="sub-img2" alt="feature background"/>
                        </div>
                        <h3 data-aos="fade-down" data-aos-delay="200">3. 24/7 Support</h3>
                        <p data-aos="fade-up" data-aos-delay="400">High-quality, 24/7 support at all stages of cooperation.</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="fea_block_center" data-aos="zoom-in" data-aos-during="900" data-aos-delay="300">
                      <img src={feacenter} alt="feature center"/>
                    </div>
                  </div>
                  
                  <div className="col-lg-5">
                    <div className="fea_block fea_block_left">
                      <div className="fea_block_content">
                        <div className="fea-img1"  data-aos="fade-left">
                          <img src={fea4} className="sub-img1 heartbeat" alt="feature 4"/>
                          <img src={feaback1} className="sub-img2" alt="feature background"/>
                        </div>
                        <h5 data-aos="fade-down" data-aos-delay="200">4. Reliability and Trust</h5>
                        <p data-aos="fade-up" data-aos-delay="400">Our rigorous vetting process and commitment to excellence ensure that you can trust our freelancers to deliver high-quality work on time.</p>
                      </div>
                    </div>

                    <div className="fea_block fea_block_left">
                      <div className="fea_block_content">
                        <div className="fea-img1" data-aos="fade-left">
                          <img src={fea5} className="sub-img1 heartbeat" alt="feature 5"/>
                          <img src={feaback1} className="sub-img2" alt="feature background"/>
                        </div>
                        <h5 data-aos="fade-down" data-aos-delay="200">5. Proven Success</h5>
                        <p data-aos="fade-up" data-aos-delay="400">We have successfully completed numerous projects across various industries, earning the trust and satisfaction of our clients.</p>
                      </div>
                    </div>

                    <div className="fea_block fea_block_left">
                      <div className="fea_block_content">
                        <div className="fea-img1" data-aos="fade-left">
                          <img src={fea6} className="sub-img1 heartbeat" alt="feature 6"/>
                          <img src={feaback1} className="sub-img2" alt="feature background"/>
                        </div>
                        <h5 data-aos="fade-down" data-aos-delay="200">6. Proactive Problem Solving</h5>
                        <p data-aos="fade-up" data-aos-delay="400">Our freelancers are not just executors but problem solvers.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fea-shape-2">
          <img src={party} style={{ width: "90px"}} alt="image" />
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
