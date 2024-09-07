import React from "react";
import { Link } from "react-router-dom";
import NavbarV2 from "../components/NavbarV2";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SimilarProductList from "../components/similarItems/SimilarProductList";
import { URL } from "../config/endpoint";

function SingleProduct() {
  const { token, isFetching, error, dispatch } = useContext(Context);
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search); // Access query parameters
  const color = queryParams.get("color");

  const [baseProductInfo, setBaseProductInfo] = useState(null);
  const [varients, setVarients] = useState([]);
  const [defaultVarient, setDefaultVarient] = useState(null);
  const [thumbNail, setThumbNail] = useState(null);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(null);
  const [rating, setRating] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [soldCount, setSoldCount] = useState(null);
  const [brand, setBrand] = useState(null);
  const [description, setDescription] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [availableSizes, setAvailableSizes] = useState([]);

  const [notFound, setNotFound] = useState(false)

  const getAvailableSizes = async (varients) => {
    let sizes = [];
    for (let varient of varients) {
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

  const addToWishList = async (e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to wishlist");
      return;
    }

    try {
      const addToWish = await axios.patch(
        `${URL}/api/wishlist/v2/addtowishlist/${defaultVarient._id}`,
        { headers }
      );

      if (addToWish.status == 200) {
        window.alert(addToWish.data);
      } else if (addToWish.response.status == 401) {
        window.alert("Please try log in!");
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 401) {
        window.alert("Please try logging in!");
        // Add your code to show the login/signup popup here
      } else {
        console.log("Other error:", error);
      }
    }
  };

  const addToCart = async (e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to Cart");
      return;
    }

    try {
      const addToCart = await axios.post(
        `${URL}/api/cart/add-to-cart`,
        { color: color, size: size, productId: baseProductInfo.productId },
        { headers }
      );

      if (addToCart.status == 200) {
        window.alert(addToCart.data);
      } else if (addToCart.response.status == 401) {
        window.alert("Please try log in!");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.alert("Please try logging in!");
        dispatch({ type: "LOGOUT" })
        // Add your code to show the login/signup popup here
      } else {
        console.log("Other error:", error);
      }
    }
  };

  useEffect(() => {
    const getProductInfo = async () => {
      let apiUrl = URL + "/api/products/productId/" + id + "/?color=" + color;
      const productInfo = await axios.get(
        apiUrl
      );

      if (productInfo.data.defaultVarient != null) {
        setBaseProductInfo(productInfo.data.product);
        setVarients(productInfo.data.productVarients);
        setDefaultVarient(productInfo.data.defaultVarient);
        setThumbNail(productInfo.data.defaultVarient.thumbnail);
        setImages(productInfo.data.defaultVarient.images);
        setTitle(productInfo.data.defaultVarient.title);
        setRating(productInfo.data.defaultVarient.rating);
        setPrice(productInfo.data.defaultVarient.price);
        setDiscountPrice(productInfo.data.defaultVarient.discountPrice);
        setSoldCount(productInfo.data.defaultVarient.soldCount);
        setDescription(productInfo.data.defaultVarient.description);
        setSize(productInfo.data.defaultVarient.size);
        setBrand(productInfo.data.product.brand.name);
        setAvailableSizes(
          await getAvailableSizes(productInfo.data.productVarients)
        );
        document.title = productInfo.data.defaultVarient.title + ' - MyShoebox';
      } else {
        setNotFound(true)
      }
    };

    getProductInfo();
  }, [id, color]);

  if (notFound) {
    return (<>
      <NotFound />
    </>)
  }

  return (
    <>
      <div className="">
        {/* <div
          className="nav"
          style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
        > */}
        <NavbarV2 />
        {/* </div> */}
        <br /><br /> <br />

        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                {/* single large image */}
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={thumbNail}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit"
                      src={thumbNail}
                    />
                  </a>
                </div>
                {/* small extra images */}
                <div
                  className="imagesV2Content"
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {images.length > 0 &&
                    images.map((image) => (
                      <div className="TEST">
                        <a
                          data-fslightbox="mygalley"
                          className="border mx-1 rounded-2"
                          target="_blank"
                          data-type="image"
                          href={image}
                        >
                          <img
                            width="60"
                            height="60"
                            className="rounded-2"
                            src={image}
                          />
                        </a>
                      </div>
                    ))}
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{title}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <span className="ms-1">{rating}</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                      {soldCount} orders
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>

                  <div className="mb-3">
                    <span className="h5">Rs. {discountPrice}</span>
                  </div>
                  <div
                    className=""
                    style={{ marginLeft: "180px", marginTop: "-43px" }}
                  >
                    <span className="h5">
                      {" "}
                      <del> Rs. {price} </del>
                    </span>
                  </div>
                  <p style={{ marginTop: "40px" }}>{description}</p>
                  <br />
                  <div className="row" style={{ display: "flex" }}>
                    <dt className="col-3">Color</dt>
                    <dd className="col-9">
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </dd>

                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">{brand}</dd>
                  </div>

                  <hr />

                  <div className="row mb-4">
                    <div className="col-md-4 col-6">
                      <dt className="col-3">Size</dt>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {size}
                        </button>
                        <ul className="dropdown-menu">
                          {availableSizes.length > 0 &&
                            availableSizes.map((sizeItem) => (
                              <li key={sizeItem}>
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
                    </div>
                    <div className="col-md-4 col-6 mb-1">
                      <label className="mb-2 d-block">Quantity</label>
                      <div
                        className="input-group mb-3"
                        style={{ width: "200px" }}
                      >
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
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
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                          onClick={increaseQuantity}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-primary"
                    onClick={addToWishList}
                  >
                    Love It!
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    style={{ marginLeft: "20px" }}
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </main>
            </div>
          </div>
        </section>

        <div className="similar-content" style={{ textAlign: "center" }}>
          <h4>You may also like</h4>
          <SimilarProductList productId={id} color={color} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default SingleProduct;
