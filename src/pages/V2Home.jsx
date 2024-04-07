import React from "react";
import Blog from "../components/Blog";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import NavbarV2 from "../components/NavbarV2";

function V2Home() {
  return (
    <>
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-2 col-sm-4 col-4">
                <a
                  href="https://mdbootstrap.com/"
                  target="_blank"
                  className="float-start"
                >
                  <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                    height="35"
                  />
                </a>
              </div>

              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex float-end">
                  <a
                    href="https://github.com/mdbootstrap/bootstrap-material-design"
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    {" "}
                    <i className="fas fa-user-alt m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">Sign in</p>{" "}
                  </a>
                  <a
                    href="https://github.com/mdbootstrap/bootstrap-material-design"
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    {" "}
                    <i className="fas fa-heart m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">Wishlist</p>{" "}
                  </a>
                  <a
                    href="https://github.com/mdbootstrap/bootstrap-material-design"
                    className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    {" "}
                    <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                    <p className="d-none d-md-block mb-0">My cart</p>{" "}
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-12">
                <div className="input-group float-center">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    <label className="form-label" for="form1">
                      Search
                    </label>
                  </div>
                  <button type="button" className="btn btn-primary shadow-0">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NavbarV2 */}
        <NavbarV2 />
        <div className="bg-primary text-white py-5">
          <div className="container py-5">
            <h1>
              Best products & <br />
              brands in our store
            </h1>
            <p>Trendy Products, Factory Prices, Excellent Service</p>
            <button type="button" className="btn btn-outline-light">
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-light shadow-0 text-primary pt-2 border border-white"
            >
              <span className="pt-1">Purchase now</span>
            </button>
          </div>
        </div>
      </header>

      <Feature />
      <ProductList />
      <Blog />
      <Footer />
    </>
  );
}

export default V2Home;
