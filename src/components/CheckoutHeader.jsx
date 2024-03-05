import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function CheckoutHeader() {
  return (
    <>
      <Navbar style={{}} />
      <header >
        <div className="bg-primary">
          <div className="container py-4">
            <nav className="d-flex">
              <h6 className="mb-0">
                <Link
                  to={"/"}
                  className="text-white-50"
                  style={{ textDecoration: "none" }}
                >
                  1. Home
                </Link>
                <span className="text-white-50 mx-2"> &gt;</span>
                <Link
                  to="/bag"
                  className="text-white-50"
                  style={{ textDecoration: "none" }}
                >
                  2. Shopping cart
                </Link>
                <span className="text-white-50 mx-2"> &gt;</span>
                <a
                  href=""
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <u>3. Order info</u>
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a
                  href=""
                  className="text-white-50"
                  style={{ textDecoration: "none" }}
                >
                  4. Payment
                </a>
              </h6>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default CheckoutHeader;
