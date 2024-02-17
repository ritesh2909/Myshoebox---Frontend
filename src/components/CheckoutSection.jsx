import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import  {URL}  from "../config/endpoint";

function CheckoutSection() {
  const { token, isFetching, error, dispatch } = useContext(Context);

  const [stripeProducts, setStripeProducts] = useState([
    {
      name: "Go FullStack with KnowledgeHut",
      price: 1000,
      productOwner: "KnowledgeHut",
      description:
        "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
      quantity: 1,
    },
  ]);
  const makePayment = async (e) => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MG1EjSEcoDUzKMhB7XWBNrNFaRb8QMOLBB0SyNUsVWFQ6Yf0PYjPnHIuZXZbHFKXX4q6S7PEdTorA76KDfNt6zg00p60OfTl5"
    );

    const response = await axios.post(
      URL + "/api/payment/create-payment-intent",
      { products: stripeProducts }
    );

    let session = response.data;
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
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
                    <button className="btn btn-light border">Cancel</button>
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
            <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div
                className="ms-lg-4 mt-4 mt-lg-0"
                style={{ maxWidth: "320px" }}
              >
                <h6 className="mb-3">Summary</h6>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">$195.90</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- $60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ $14.00</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">$149.90</p>
                </div>

                <div className="input-group mt-3 mb-4">
                  <input
                    type="text"
                    className="form-control border"
                    name=""
                    placeholder="Promo code"
                  />
                  <button className="btn btn-light text-primary border">
                    Apply
                  </button>
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

                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      1
                    </span>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                      style={{ height: "96px", width: "96x" }}
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      Apple Watch Series 4 Space <br />
                      Large size
                    </a>
                    <div className="price text-muted">Total: $217.99</div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                      3
                    </span>
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                      style={{ height: "96px", width: "96x" }}
                      className="img-sm rounded border"
                    />
                  </div>
                  <div className="">
                    <a href="#" className="nav-link">
                      GoPro HERO6 4K Action Camera - Black
                    </a>
                    <div className="price text-muted">Total: $910.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutSection;
