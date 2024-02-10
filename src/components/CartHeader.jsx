import React from "react";

function CartHeader() {
  return (
    <>
      <header style={{ marginTop: "65px" }}>
        <div className="bg-primary">
          <div className="container py-4">
            <nav className="d-flex">
              <h6 className="mb-0">
                <a href="" className="text-white-50">
                  Home
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a href="" className="text-white">
                  <u>Shopping cart</u>
                </a>
              </h6>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default CartHeader;
