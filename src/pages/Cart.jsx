import React from "react";
import CartSummary from "../components/CartSummary";
import RecommendCart from "../components/RecommendCart";
import CartHeader from "../components/CartHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { URL } from "../config/endpoint"

function Cart() {

  const { token, isFetching, error, dispatch } = useContext(Context);
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [cartItems, setCartItems] = useState([]);
  const [transactionInfo, setTransactionInfo] = useState({})
  useEffect(() => {
    const getCartInfo = async () => {
      if (!token) {
        window.alert("Login to add items to cart!");
        return null;
      }

      try {

        const url = `${URL}/api/cart/getCartItem`;
        const cartInfo = await axios.get(url, { headers });
        setCartItems(cartInfo.data.cartItem);
        setTransactionInfo(cartInfo.data.transaction)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          window.alert("Please try logging in!");
          dispatch({ type: "LOGOUT" })
        } else {
          console.log("Other error:", error);
        }
        console.log(error);
      }
    };
    getCartInfo();
  }, []);
  
  return (
    <>
      <Navbar />
      <CartHeader />
      {cartItems.length > 0 ? <CartSummary cartProducts={cartItems} transaction={transactionInfo} /> : <>

    Add items to cart

      </> }

      <RecommendCart />
      <Footer />
    </>
  );
}

export default Cart;
