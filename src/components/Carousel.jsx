import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/28082023-UHP-D-AjiomaniaMainBanner-5090.gif"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-Main-P2-AllenSollyLP-min40.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-main-P3-RedtapeYovish-min70.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-MAIN-p4-figavaasa-5070.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-main-P5-guessfossil-min50.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-main-P6-NikeAdidasOriginals-min35.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/31082023-UHP-D-main-P7-AllenSollyVanHeusen-min50.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
           <div className="carousel-item">
            <img
              src="https://misfits-images.s3.ap-south-1.amazonaws.com/1546.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
           <div className="carousel-item">
             <video controls>
              <source src="https://s3.ap-south-1.amazonaws.com/testbucket3.0/VID_20230901_222523.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
