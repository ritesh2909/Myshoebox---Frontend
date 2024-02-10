import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import  URL  from "../../config/endpoint";

function SimilarProductListItem(props) {
  if (!props.product) {
    return null; // not products available
  }

  const { token } = useContext(Context);
  const storedUserData = localStorage.getItem("token");
  const parsedUserData = JSON.parse(storedUserData);
  const authToken = parsedUserData?.token;

  const headers = {
    authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  };

  const changeUrl = () => {
    window.location.assign(
      URL + `/api/products/you-may-also-like/${props.product.productId}/?color=${props.product.color}`
    );
    window.location.reload();
  };

  const addToWishList = async (e) => {
    e.preventDefault();
    try {
      if (!user || !authToken) {
        window.location.href = "/signin";
      }
      const res = await axios.put(
        URL + `/api/wishlist/addtowishlist/${props.product.defaultVarient.productId}`,
        {},
        { headers }
      );
      if (res.status == 200) {
        window.alert("Product added to your wishlist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex" onClick={changeUrl}>
        <div className="card w-100 my-2 shadow-2-strong">
          <Link to={`/${props.product.productId}?color=${props.product.color}`}>
            <img
              src={props.product.thumbnail}
              className="card-img-top"
              style={{ aspectRatio: "1 / 1", cursor: "pointer" }}
              alt={props.product.title}
            />
          </Link>
          <div
            className="card-body d-flex flex-column"
            style={{ marginTop: "20px" }}
          >
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {props.product.title}
            </h5>
            <hr />
            <div
              className="bottomContent"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-around",
                marginTop: "12px",
              }}
            >
              <dd>Rs. {props.product.discountPrice}</dd>
              <span>
                Rs. <del> {props.product.price}</del>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimilarProductListItem;
