// import Swiper core and required modules
import { Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";



import image1 from "../../../assets/images/Slide/ecommerceslidemain.png";
import image2 from "../../../assets/images/Slide/professtionalwriten.png";
import image3 from "../../../assets/images/Slide/professtionalwebsite.png";
import image4 from "../../../assets/images/Slide/mobileapp.png";
import money from "../../../assets/images/money-flow-8507486-6691626.webp";
import money2 from "../../../assets/images/s0KLYbQjDtENdQgyAPlfPjzJihI.webp";
import { useEffect } from "react";
import Aos from "aos";


const MainSlide = () => {
  const slides = [
    {
      id: 1,
      headertittle: "E-COMMERCE SOLUTIONS",
      tittle: "Comprehensive E-commerce ",
      discription:
        "End-to-end e-commerce services, from store setup to management. Grow your online business effortlessly.",
      image: image1,
    },
    {
      id: 2,
      headertittle: "CONTENT WRITING SERVICES",
      tittle: "Professional Content Writing",
      discription:
        "Engaging content for blogs, websites, and marketing materials. Enhance your brands voice with quality content.",
      image: image2,
    },
    {
      id: 3,
      headertittle: "WEB DEVELOPMENT SERVICES",
      tittle: "Professional Web Development",
      discription:
        " Custom websites tailored to your needs. Get your  business online with a professional touch.",
      image: image3,
    },
    {
      id: 4,
      headertittle: "MOBILE APPLICATION DEVELOPMENT",
      tittle: "Mobile App Development",
      discription:
        "High-quality mobile apps for iOS and Android platforms. Enhance your reach with a powerful  mobile presence.",
      image: image4,
    },
  ];

  useEffect(() => {
    Aos.init();
  });



  return (
    <>
      <div className="main-slides-area">
        <Swiper
          modules={[Pagination, Scrollbar]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="Swiper1"
        >
          {slides.map((item) => (
            <SwiperSlide  key={item.id}>
              <div className="main-slides-item" >
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                      <div className="main-slides-content">
                        <span data-aos="fade-left" >{item.headertittle}</span>
                        <h1 data-aos="fade-right">{item.tittle}</h1>
                        <p data-aos="fade-down">{item.discription}</p>
                        <div className="slides-btn">
                          <a
                            href="https://t.me/camgotech"
                            className="default-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                          >
                            GET STARTED
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="main-slides-image">
                        <img
                          src={item.image}
                          className="d-lg-inline-block"
                          alt="E-commerce Solutions"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="main-slides-shape-3">
          <img src={money2}  style={{width: "90px"}} alt="Shape" />
        </div>
        <div className="main-slides-shape-5">
          <img src={money} style={{width: "100px"}} alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default MainSlide;
