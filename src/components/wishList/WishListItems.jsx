import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import WishListItem from "./WishListItem";
import { Context } from "../../context/Context";
import { URL } from "../../config/endpoint";

function WishListItems(props) {
  const products = props.props;
  console.log(products)
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
              {products.length > 0 &&
                products.map((item) => <WishListItem product={item} key={item.wishListItem._id} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListItems;
