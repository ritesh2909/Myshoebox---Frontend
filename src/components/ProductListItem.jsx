import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import { URL } from "../config/endpoint";

function ProductListItem(props) {
  if (!props.product) {
    return null; // not products available
  }
  console.log(props.product)
  const { token, isFetching, error, dispatch } = useContext(Context);
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const addToWishList = async (e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to wishlist");
      return;
    }

    try {
      const addToWish = await axios.patch(
        `${URL}/api/wishlist/v2/addtowishlist/${props.product.defaultVarient._id}`,
        {},
        { headers }
      );
      if (addToWish.status == 200) {
        window.alert(addToWish.data);
      } else if (addToWish.response.status == 401) {
        window.alert("Please try log in!");
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status == 401) {
        window.alert("Please try logging in!");
        dispatch({ type: "LOGOUT" })
        localStorage.removeItem('token');

        // Add your code to show the login/signup popup here
      } else {
        console.log("Other error:", error);
      }
    }
  };

  const addToCart = async (productInfoId, e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to Cart");
      return;
    }

    try {
      const addToCart = await axios.post(
        URL + `/api/cart/add-to-cart/${productInfoId}`,
        { quantity: 1 },
        { headers }
      );
      console.log(addToCart)

      // if (addToCart.status == 200) {
      //   window.alert(addToCart.data);
      // } else if (addToCart.response.status == 401) {
      //   window.alert("Please try log in!");
      // }
    } catch (error) {
      console.log(error)
      // if (error.response && error.response.status === 401) {
      //   window.alert("Please try logging in!");
      //   dispatch({ type: "LOGOUT" })
      //   // Add your code to show the login/signup popup here
      // } else if (error.response.status == 400) {
      //   window.alert(error.response.data)
      // } 
      // else {
      //   console.log("Other error:", error);
      // }

    }
  };


  const storedUserData = localStorage.getItem("token");
  const parsedUserData = JSON.parse(storedUserData);
  const authToken = parsedUserData?.token;


  return (
    <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
      <div className="card w-100 my-2 shadow-2-strong">
        <Link
          to={`/product-info/${props.product.productId}?color=${props.product.defaultVarient.color}`}
        >
          <img
            src={props.product.defaultVarient.thumbnail}
            className="card-img-top"
            style={{ aspectRatio: "1 / 1", cursor: "pointer" }}
            alt={props.product.defaultVarient.title}
          />
        </Link>
        <div
          className="card-body d-flex flex-column"
          style={{ marginTop: "20px" }}
        >
          <h5 className="card-title" style={{ cursor: "pointer" }}>
            {props.product.brandInfo.name + '  ' + props.product.defaultVarient.title}
          </h5>
          <p className="card-text" style={{ cursor: "pointer" }}>
            Rs. {props.product.defaultVarient.discountPrice}
          </p>
          <div className="" style={{ marginLeft: "160px", marginTop: "-43px" }}>
            <span>
              {" "}
              <del> Rs. {props.product.defaultVarient.price}</del>
            </span>
          </div>

          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
            <button className="btn btn-outline-primary" onClick={(e) => addToCart(props.product.defaultVarient._id, e)} >Add to cart</button>
            <button
              className="btn btn-outline-primary"
              style={{ marginLeft: "30px" }}
              onClick={addToWishList}
            >
              Love it !
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductListItem;
