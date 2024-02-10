import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import WishListItem from "./WishListItem";
import { Context } from "../../context/Context";
import  URL  from "../../config/endpoint";

function WishListItems() {
  const { token, isFetching, error, dispatch } = useContext(Context);

  const [products, setProducts] = useState([]);

  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  useEffect(() => {
    const getWishList = async () => {
      if (!token) {
        window.location.href = "/signin";
        window.location.reload();
      }

      try {
        const wishListProds = await axios.get(
          `${URL}/api/wishlist/getwishlist`,
          { headers: headers }
        );
        console.log(wishListProds);

        setProducts(wishListProds.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getWishList();
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="container-fluid"
          style={{
            marginLeft: "160px",
            marginTop: "80px",
            marginBottom: "90px",
          }}
        >
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">
                  WishList - {products.length > 0 ? products.length : 0} Items
                </h5>
              </div>
              {/* // to be displayed when products are there else nothing */}
              {products.length > 0 &&
                products.map((item) => <WishListItem product={item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListItems;
