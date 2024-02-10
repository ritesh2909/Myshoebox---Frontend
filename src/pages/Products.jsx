import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainProducts from "../components/MainProducts";

function Products() {
  return (
    <>
      <Navbar />
      <div className="v2-content" style={{ marginTop: "50px" }}>
        <MainProducts  />
      </div>
      <Footer />
    </>
  );
}

export default Products;
