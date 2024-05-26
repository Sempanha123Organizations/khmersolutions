import React, { useEffect } from 'react';
import Aos from 'aos';

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  return (
    <>
      <div className="contact-us pt-100 pb-75" id="contact" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h3 data-aos="fade-right">Feel free to <b>contact us</b> anytime</h3>
                <p data-aos="fade-right" data-aos-delay="400">Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.</p>
                <div className="special-offer" data-aos="fade-right">
                  <span className="offer">off<br /><em>50%</em></span>
                  <h6>Valid: <em>24 April 2036</em></h6>
                  <h4>Special Offer <em>50%</em> OFF!</h4>
                  <a></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" action="" method="post">
                  <div className="row" data-aos="zoom-in">
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <a className="default-btn" >Know More About Us</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
