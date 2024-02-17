import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import  {URL}  from "../../config/endpoint";

function WishListItem(props) {
  const { token, isFetching, error, dispatch } = useContext(Context);

  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [size, setSize] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const getAvailableSizes = async () => {
    let sizes = [];
    for (let varient of props.product.varient) {
      sizes.push(varient.size);
    }

    sizes = [...new Set(sizes)];
    sizes.sort((a, b) => a - b);
    return sizes;
  };

  const changeSize = (e, sizeItem) => {
    e.preventDefault();
    setSize(sizeItem);
  };

  const increaseQuantity = (e) => {
    e.preventDefault();
    if (quantity == 5) {
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreamentQuanity = (e) => {
    e.preventDefault();
    if (quantity == 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const removeFromWishList = async (e) => {
    try {
      const url = `${URL}/api/wishlist/v2/remove/${props.product.wishListItem._id}`;
      const res = await axios.delete(url, { headers });
      if (res.status == 204) {
        window.alert("Item removed from Wishlist!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const moveToCart = async (e) => {
    e.preventDefault();

    if (!props) return;
    try {
      const url = `${URL}/api/wishlist/movetocart/${props.product.wishListItem._id}`;
      const res = await axios.put(
        url,
        { size: size, color: props.product.wishListItem.color },
        { headers }
      );
      if (res.status == 200) {
        window.alert(res.data);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      if (!props) return;
      setSize(props.product.productInfo.size);
      setAvailableSizes(await getAvailableSizes());
    };
    onLoad();
  }, []);

  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src={props.product.productInfo.thumbnail}
                className="w-100"
                alt={props.product.productInfo.title}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                  }}
                ></div>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p>
              <strong>{props.product.productInfo.title}</strong>
            </p>
            <div
              className="color"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <p>Color: </p>
              <p style={{ marginLeft: "58px" }}>
                {props.product.productInfo.color.charAt(0).toUpperCase() +
                  props.product.productInfo.color.slice(1)}
              </p>
            </div>
            <p>Size</p>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginLeft: "100px", marginTop: "-80px" }}
              >
                {size}
              </button>
              <ul className="dropdown-menu">
                {availableSizes.length > 0 &&
                  availableSizes.map((sizeItem) => (
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => changeSize(e, sizeItem)}
                      >
                        {sizeItem}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-outline-primary btn-sm mb-2"
              data-mdb-toggle="tooltip"
              onClick={moveToCart}
            >
              Move to Cart
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm mb-2"
              data-mdb-toggle="tooltip"
              style={{ marginLeft: "10px" }}
              onClick={removeFromWishList}
            >
              Remove from Wishlist
            </button>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
              <button
                className="btn btn-primary px-3 me-2"
                onClick={decreamentQuanity}
              >
                <RemoveIcon />
              </button>

              <div
                className="form-control text-center
                          border border-secondary"
                placeholder={quantity}
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                style={{ width: "55px" }}
              >
                {quantity}
              </div>

              <button
                className="btn btn-primary px-3 ms-2"
                onClick={increaseQuantity}
              >
                <AddIcon />
              </button>
            </div>

            <p className="text-start text-md-center">
              <strong>
                Rs. {"  "} {props.product.productInfo.discountPrice}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListItem;
