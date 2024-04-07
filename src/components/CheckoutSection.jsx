import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { URL } from "../config/endpoint";
import CheckoutHeader from "../components/CheckoutHeader";
import Loader from "./loader/Loader";
import { Link } from "react-router-dom";
import { SetPaymentTrigger } from "../context/Action";

function CheckoutSection() {
  const { token, isFetching, error, dispatch, isPaymentTriggered } = useContext(Context);
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [cartItems, setCartItems] = useState([]);
  const [transaction, setTransaction] = useState(null)
  const [stripeProducts, setStripeProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCartInfo = async () => {
      if (!token) {
        window.alert("try logging in again!");
        window.location = "/signin"
        return;
      }
      try {
        const url = `${URL}/api/cart/getCartItem`;
        const cartInfo = await axios.get(url, { headers });
        setCartItems(cartInfo.data.cartItem);
        // console.log(cartInfo)
        setTransaction(cartInfo.data.transaction)
        let cartItems = [];
        for (let item of cartInfo.data.cartItem) {
          cartItems.push({
            name: item.productInfoId.title,
            price: item.productInfoId.discountPrice,
            productOwner: "Myshoebox",
            description: item.productInfoId.description
          })
        }
        setStripeProducts(cartItems);
        setLoading(false)
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


  const makePayment = async (e) => {
    console.log("controll")
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MG1EjSEcoDUzKMhB7XWBNrNFaRb8QMOLBB0SyNUsVWFQ6Yf0PYjPnHIuZXZbHFKXX4q6S7PEdTorA76KDfNt6zg00p60OfTl5"
    );
    console.log("controll2")
    let sessionId = "";
    try {
      console.log("control3")
      const response = await axios.post(
        URL + "/api/payment/create-payment-intent",
        { amount: Number(transaction.totalAmount.toFixed(2)) },
        { headers }
      );
      sessionId = response.data.id;
    } catch (error) {
      console.log(error)
    }
    console.log("Generated SessionId", sessionId)
    console.log("ISPAYMENT TRIGGERED 1 ", isPaymentTriggered)
    dispatch({ type: "SET_PAYMENT_TRIGGER", payload: sessionId })
    console.log("ISPAYMENT TRIGGERED 2 ", isPaymentTriggered)
    const result = stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    console.log(result)
    console.log("redirected")
    if (result.error) {
      console.log(result.error);
    }
  };


  return (
    <>
      {loading ? (<Loader />) : (
        <>
          <CheckoutHeader />
          <section className="bg-light py-5">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 mb-4">
                  <div className="card shadow-0 border">
                    <div className="p-4">
                      <h5 className="card-title mb-3">Delievery Information</h5>
                      <div className="row">
                        <div className="col-6 mb-3">
                          <p className="mb-0">First name</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              placeholder="Type here"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-6">
                          <p className="mb-0">Last name</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              placeholder="Type here"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-6 mb-3">
                          <p className="mb-0">Phone</p>
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="typePhone"
                              value="+91 "
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-6 mb-3">
                          <p className="mb-0">Email</p>
                          <div className="form-outline">
                            <input
                              type="email"
                              id="typeEmail"
                              placeholder="example@gmail.com"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Keep me up to date on news
                        </label>
                      </div>

                      <hr className="my-4" />
                      <h5
                        className="card-title"
                        style={{ marginTop: "6px", marginBottom: "26px" }}
                      >
                        Shipping Information
                      </h5>
                      <div className="row">
                        <div className="col-sm-8 mb-3">
                          <p className="mb-0">Address</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              placeholder="Type here"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-sm-4 mb-3">
                          <p className="mb-0">City</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              placeholder="City"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-sm-4 mb-3">
                          <p className="mb-0">House</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              placeholder="Type here"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-sm-4 col-6 mb-3">
                          <p className="mb-0">Postal code</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-sm-4 col-6 mb-3">
                          <p className="mb-0">Zip</p>
                          <div className="form-outline">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          Save this address
                        </label>
                      </div>

                      <div className="mb-3">
                        <p className="mb-0">Message to seller</p>
                        <div className="form-outline">
                          <textarea
                            className="form-control"
                            id="textAreaExample1"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>

                      <div className="float-end">
                        <Link to={"/cart"} >
                          <button className="btn btn-light border">Cancel</button>
                        </Link>
                        <button
                          className="btn btn-success shadow-0 border"
                          onClick={makePayment}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* transaction summary */}
                {transaction &&
                  <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end" style={{ "marginLeft": "-20px" }} >
                    <div
                      className="ms-lg-4 mt-4 mt-lg-0"
                      style={{ maxWidth: "320px" }}
                    >
                      <h6 className="mb-3">Summary</h6>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2">₹ {Number(transaction.amount.toFixed(2))}</p>
                      </div>
                      {transaction.discounts.map((item) => (
                        <div className="d-flex justify-content-between">

                          <p className="mb-2">Discount:</p>
                          <p className="mb-2 text-danger">-₹ {Number(item.totalAmount.toFixed(2))} </p>
                        </div>
                      ))}

                      <div className="d-flex justify-content-between" style={{ marginTop: "20px" }}>
                        <p className="mb-2">Final Amount</p>
                        <p className="mb-2">₹ {Number(transaction.totalAmount - transaction.taxAmount).toFixed(2)}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="mb-2">TAX (18%)</p>
                        <p className="mb-2">₹ {Number(transaction.taxAmount.toFixed(2))}</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2 fw-bold">₹ {Number(transaction.totalAmount.toFixed(2))}</p>
                      </div>

                      <hr />
                      <h6 className="text-dark my-4">Items in cart</h6>

                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3 position-relative">
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                            1
                          </span>
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                            style={{ height: "96px", width: "96x" }}
                            className="img-sm rounded border"
                          />
                        </div>
                        <div className="">
                          <a href="#" className="nav-link">
                            Gaming Headset with Mic <br />
                            Darkblue color
                          </a>
                          <div className="price text-muted">Total: $295.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                }


              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default CheckoutSection;
