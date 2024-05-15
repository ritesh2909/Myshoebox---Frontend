import React from "react";
import Blog from "../components/Blog";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import BrandList from "../components/BrandList";
import { useState, useEffect } from "react";
import axios from "axios";
// import OffShore from "../components/cartv3/OffShore";
import NavbarV2 from "../components/NavbarV2";
import V2Home from "./V2Home";

function Home() {
  console.log("Home page rendered")
  return (
    <>
      <NavbarV2 />
      <div className="carousel" style={{ marginTop: "50px" }}>
        <Carousel />
      </div>
      <div  style={{ width: "40%" }}>
               <video controls>
              <source src="https://misfits-images.s3.ap-south-1.amazonaws.com/0068F40B875C.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>    
        
      </div>
      {/* <OffShore /> */}
      <ProductList />
      <CategoryList />
      <BrandList />
      <Blog />
      <Footer />
      {/* todo later need some components from V2Home */}
      {/* <V2Home /> */}
    </>
  );
}

export default Home;
