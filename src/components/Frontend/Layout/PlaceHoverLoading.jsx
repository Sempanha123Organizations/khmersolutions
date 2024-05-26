import React from "react";

const PlaceHoverLoading = () => {
  return (
    <>
      <div className="pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="main-slides-content placeholder-glow">
                <span className="placeholder col-3"> </span>
                <h1>
                  <span className="placeholder col-4"> </span>
                </h1>
                <p>
                
                  <span className="placeholder col-6"> </span>
                </p>
                <p className="slides-btn">
                  
                  <a className="default-btn placeholder col-2"> </a>
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 "
            >
              <div className="main-slides-image">
                <img
                  alt="Camgotech Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-12 placeholder-glow">
              <div
                className="about-image placeholder"
                style={{ width: "90%", height: "300px" }}
              >
                
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content placeholder-glow">
                <span className="placeholder col-2"></span>
                <h3 className="placeholder col-12"></h3>
                <p className="placeholder col-8"></p>
                <p className="placeholder col-9"></p>
                <div className="about-btn">
                  <a
                    className="default-btn placeholder col-3"
                    href="/about/"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceHoverLoading
