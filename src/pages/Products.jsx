import React from "react";
import Footer from "../components/Footer";
import NavbarV2 from "../components/NavbarV2";
import MainProducts from "../components/MainProducts";

function Products() {
  return (
    <>
      <NavbarV2 />
      <div className="v2-content" style={{ marginTop: "50px" }}>
        <MainProducts  />
      </div>
      <Footer />
    </>
  );
}

export default Products;
