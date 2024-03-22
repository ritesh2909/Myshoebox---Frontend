import React from "react";
import { Link } from "react-router-dom";

function CartSummary(props) {
  const cartProduct = props.cartProducts;
  const transaction = props.transaction;
  console.log(cartProduct)
  // console.log(transaction)
  return (
    <>
      <section className="bg-light my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>

                  {/* cart items */}

                  {cartProduct.map((item) => (
                    <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">

                            <Link to={`/product-info/${item.productInfoId.productId}?color=${item.productInfoId.color}`}  >
                              <img
                                src={item.productInfoId.thumbnail}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                              />
                            </Link>
                            <div className="">
                              <p><Link to={`/product-info/${item.productInfoId.productId}?color=${item.productInfoId.color}`} style={{ width: "100%", textDecoration: "none", color: "black" }} >{item.productInfoId.title}</Link></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: "100px" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <text className="h6">$1156.00</text> <br />
                          <small className="text-muted text-nowrap">
                            {" "}
                            $460.00 / per item{" "}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            href="#!"
                            className="btn btn-light border px-2 icon-hover-primary"
                          >
                            <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                          </a>
                          <a
                            href="#"
                            className="btn btn-light border text-danger icon-hover-danger"
                          >
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div> */}
                    </div>
                  ))}




                </div>

                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>

            {/* right sidebar */}

            {/* coupon card */}
            <div className="col-lg-3">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* checkout card */}
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">₹ {Number(transaction.amount.toFixed(2))}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    {transaction.discounts.map((item) => (
                      <>
                        <p className="mb-2">Discount:</p>
                        <p className="mb-2 text-success">-₹ {Number(item.totalAmount.toFixed(2))}</p>
                      </>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between" style={{ marginTop: "20px" }}>
                    <p className="mb-2">Final Amount</p>
                    <p className="mb-2">₹ {Number(transaction.totalAmount.toFixed(2)) - Number(transaction.taxAmount.toFixed(2))}</p>
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

                  <div className="mt-3">
                    <Link to={"/checkout"} >
                      <a href="#" className="btn btn-success w-100 shadow-0 mb-2">
                        {" "}
                        Make Purchase{" "}
                      </a>
                    </Link>
                    <Link to={"/"} >
                      <a href="#" className="btn btn-light w-100 border mt-2">
                        {" "}
                        Back to shop{" "}
                      </a>
                    </Link>
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

export default CartSummary;
