import React from "react";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import  {URL}  from "../config/endpoint";

function Bag() {
  const { token, isFetching, error, dispatch } = useContext(Context);
  
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartInfo = async () => {
      if (!token) {
        window.alert("Login to add items to cart!");
        return null;
      }

      try {
        const url = `${URL}/api/cart/getCartItem`;
        const cartInfo = await axios.get(url, { headers });

        setCartItems(cartInfo.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCartInfo();
  }, []);

  return (
    <>
      <Navbar />
      <section className="container">
        <div
          style={{
            display: "flex",
            marginTop: "60px",
            justifyContent: "space-between",
          }}
        >
          <div className="row d-flex justify-content-center my-4">
            {cartItems && cartItems.length > 0 && (
              <div style={{ marginRight: "30px" }}>
                <BagItems cartItems={cartItems} />
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div
              className="bagSummary"
              style={{ marginLeft: "-410px", marginTop: "25px" }}
            >
              <BagSummary />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Bag;

