import React from "react";
import CartSingleItem from "./cartitems/CartSingleItem";

function BagItems(props) {
  let cartItems = props.cartItems;

  return (
    <>
      <div className="col-md-7">
        {/* items in cart */}
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cartItems.length} items</h5>
          </div>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => (
              <CartSingleItem item={item} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default BagItems;
