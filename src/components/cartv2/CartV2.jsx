import React from 'react'

function CartV2() {
  return (
    // <>
    //   <div className="offcanvas-header" style={{ marginTop: "5px", marginBottom: "-14px" }}>
    //     <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
    //     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //   </div>
    //   <hr />
    //   <div className="offcanvas-body" style={{ overflowY: "auto" }}>
    //     <div class="offcanvas-body">
    //       <div class="list-group">
    //         <div class="list-group-item list-group-item-action">
    //           <div class="row align-items-center">
    //             <div class="col-auto">
    //               <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
    //             </div>
    //             <div class="col">
    //               <h5 class="mb-1">Product 1</h5>
    //               <p class="mb-1">Size: M, Color: Blue</p>
    //               <p class="mb-1">Quantity: 1</p>
    //             </div>
    //             <div class="col-auto">
    //               <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
    //             </div>
    //           </div>
    //           <div class="row align-items-center">
    //             <div class="col-auto">
    //               <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
    //             </div>
    //             <div class="col">
    //               <h5 class="mb-1">Product 1</h5>
    //               <p class="mb-1">Size: M, Color: Blue</p>
    //               <p class="mb-1">Quantity: 1</p>
    //             </div>
    //             <div class="col-auto">
    //               <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
    //             </div>
    //           </div>
    //           <div class="row align-items-center">
    //             <div class="col-auto">
    //               <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
    //             </div>
    //             <div class="col">
    //               <h5 class="mb-1">Product 1</h5>
    //               <p class="mb-1">Size: M, Color: Blue</p>
    //               <p class="mb-1">Quantity: 1</p>
    //             </div>
    //             <div class="col-auto">
    //               <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
    //             </div>
    //           </div>
    //           <div class="row align-items-center">
    //             <div class="col-auto">
    //               <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
    //             </div>
    //             <div class="col">
    //               <h5 class="mb-1">Product 1</h5>
    //               <p class="mb-1">Size: M, Color: Blue</p>
    //               <p class="mb-1">Quantity: 1</p>
    //             </div>
    //             <div class="col-auto">
    //               <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
    //             </div>
    //           </div>



    //         </div>
    //       </div>
    //       <div class="text-center my-3">
    //         <h6>Apply Coupon Code:</h6>
    //         <div class="input-group mb-3">
    //           <input type="text" class="form-control" placeholder="Enter coupon code" aria-label="Enter coupon code" aria-describedby="button-addon2" />
    //           <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply</button>
    //         </div>
    //       </div>
    //       <div class="text-center">
    //         <p>Price: $100</p>
    //         <p>Discounts: -$10</p>
    //         <p>Total Price: $90</p>
    //         <button class="btn btn-primary">Checkout</button>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="content">
        <div className="offcanvas-header" style={{ marginTop: "5px", marginBottom: "-14px" }}>
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr />
        <div className="offcanvas-body" style={{ overflowY: "auto" }} ></div>
        <div className="cart-section">
          <div className="item-list">
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-auto">
                <img src="https://lh5.googleusercontent.com/p/AF1QipN9-70pNufjRlCc47chB1adnfwI280DUvWOiJeP=w408-h272-k-no" alt="Product Image" class="img-thumbnail" />
              </div>
              <div class="col">
                <h5 class="mb-1">Product 1</h5>
                <p class="mb-1">Size: M, Color: Blue</p>
                <p class="mb-1">Quantity: 1</p>
              </div>
              <div class="col-auto">
                <button type="button" class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
          <div className="discounts-section"></div>
          <div className="transaction-section"></div>
          <div className="checkout-section"></div>
        </div>

      </div>
    </>
  )
}

export default CartV2