import React, { useEffect } from "react";
import author1 from "../../../assets/images/author1.png";
import author2 from "../../../assets/images/author2.png";
import author3 from "../../../assets/images/author3.png";
import author4 from "../../../assets/images/author4.png";

import Aos from "aos";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Feedback = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200
    });
  });
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ">
                <Swiper
                  modules={[Pagination, Scrollbar, Autoplay]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                  autoplay={{ delay:4000 }}
                  className="testimonials-swiper"
                >
                  <SwiperSlide >
                    <div className=" item">
                      <p data-aos="fade-right">
                        “The website looks fantastic and functions seamlessly. I
                        highly recommend their services to anyone looking to
                        build a professional website!”
                      </p>
                      <div className="author" >
                        <img src={author1} alt="Testimonial Author" data-aos="fade-down" />
                        <span className="category" data-aos="fade-right" data-aos-delay="200">21-08-2023</span>
                        <h4 data-aos="fade-right" data-aos-delay="400">Chhay Sovanvathana</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" item" >
                      <p  data-aos="fade-right">
                        “They built my website quickly and efficiently, and the
                        final product exceeded my expectations. I'll definitely be using
                        their services again for future projects.”
                      </p>
                      <div className="author">
                        <img src={author2} alt="Testimonial Author"data-aos="fade-down" />
                        <span className="category" data-aos="fade-right" data-aos-delay="200" >05-10-2023</span>
                        <h4 data-aos="fade-right" data-aos-delay="400" >Samnang Pot</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" item">
                      <p data-aos="fade-right">
                        “They have a great eye for design and were very
                        responsive to my feedback throughout the process. The
                        end result is a website that perfectly represents my
                        brand. Thank you for your outstanding work!”
                      </p>
                      <div className="author">
                        <img src={author3} alt="Testimonial Author"data-aos="fade-down" />
                        <span className="category" data-aos="fade-right" data-aos-delay="200" >19-12-2023</span>
                        <h4 data-aos="fade-right" data-aos-delay="400" >Kanika Nhem</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" item">
                      <p data-aos="fade-right">
                        “They were always available to answer my questions and
                        made the entire process stress-free. The website they
                        built is exactly what I wanted and more. I couldn’t be
                        happier with the result!”
                      </p>
                      <div className="author">
                        <img src={author4} alt="Testimonial Author"data-aos="fade-down" />
                        <span className="category" data-aos="fade-right" data-aos-delay="200" >21-04-2024</span>
                        <h4 data-aos="fade-right" data-aos-delay="400" >Soeurn Sreypheap</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

            </div>
            <div className="col-lg-5">
              <div className="testimonials-content aos-init">
                <h3 data-aos="fade-right">
                  Some <b>Sweet Feedback</b> of our happy clients
                </h3>
                <p style={{ fontSize: "19px" }} data-aos="fade-down" data-aos-delay="200">
                  We are so happy to hear that you are enjoying your Project.
                  Please let us know if we can help you with anything further,
                  and thank you for taking your time to leave us this super kind
                  review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
