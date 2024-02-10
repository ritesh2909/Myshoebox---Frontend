import React from "react";
import V3Footer from "../components/V3Footer";
import CheckoutSection from "../components/CheckoutSection";
import CheckoutHeader from "../components/CheckoutHeader";
import Navbar from "../components/Navbar";
function Checkout() {
  return (
    <>
      <Navbar />
      <CheckoutHeader />
      <CheckoutSection />
      <V3Footer />
    </>
  );
}

export default Checkout;
