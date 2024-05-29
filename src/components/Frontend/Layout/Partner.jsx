import React from "react";
// import Swiper core and required modules
import { Pagination, Scrollbar, Autoplay  } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';

import php from "../../../assets/images/Slide/php.png";
import bootstrap from "../../../assets/images/Slide/bootstrap.png";
import css from "../../../assets/images/Slide/css.png";
import flutter from "../../../assets/images/Slide/flutter.png";
import html from "../../../assets/images/Slide/html.png";
import javascript from "../../../assets/images/Slide/javascript.png";
import jquery from "../../../assets/images/Slide/jquery.png";
import laravel from "../../../assets/images/Slide/laravel.png";
import react from "../../../assets/images/Slide/react.png";

const Partner = () => {

  const partners = [
    { id:1, imagepatner: php},
    { id:2, imagepatner: bootstrap},
    { id:3, imagepatner: css},
    { id:4, imagepatner: flutter},
    { id:5, imagepatner: html},
    { id:6, imagepatner: javascript},
    { id:7, imagepatner: jquery},
    { id:8, imagepatner: laravel},
    { id:9, imagepatner: react},
  ];
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 1500 }}
            className="swiper-partner"
          >
            {partners.map(partner => (
            <SwiperSlide key={partner.id}>
              <div className="partner-card" >
                <a>
                  <img
                    src={partner.imagepatner}
                    alt="khmer solution"
                  />
                </a>
              </div>
            </SwiperSlide>
            ))}
      
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
