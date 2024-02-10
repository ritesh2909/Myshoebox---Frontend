import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WishListItems from "../components/wishList/WishListItems";

function Wishlist() {
  return (
    <div>
      <Navbar />
      <WishListItems />
      <Footer />
    </div>
  );
}

export default Wishlist;
