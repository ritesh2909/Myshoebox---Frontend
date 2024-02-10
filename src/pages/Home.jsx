import React from "react";
import Blog from "../components/Blog";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import BrandList from "../components/BrandList";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  return (
    <>
      <Navbar />
      <div className="carousel" style={{ marginTop: "50px" }}>
        <Carousel />
      </div>
      <ProductList />
      <CategoryList />
      <BrandList />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
