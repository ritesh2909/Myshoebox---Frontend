import React from "react";
import CartSummary from "../components/CartSummary";
import RecommendCart from "../components/RecommendCart";
import CartFooter from "../components/CartFooter";
import CartHeader from "../components/CartHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <>
      <Navbar />
      <CartHeader />
      <CartSummary />
      <RecommendCart />
      <Footer />
    </>
  );
}

export default Cart;
