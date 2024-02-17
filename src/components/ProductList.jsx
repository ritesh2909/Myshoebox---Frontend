import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import { URL } from "../config/endpoint";
import Shimmer from "./shimmer/Shimmer"

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get(
        URL + "/api/products/home-page-products"
      );

      setProductList(products.data);
      setLoading(false)
    };
    getProducts();
  }, []);

  return (
    <>
      <section>
        {loading ? (
          <div className="container my-5">
            <div className="row">
              {[...Array(4)].map((_, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                  <div className="card w-100 my-2 shadow-2-strong" >
                    <div>
                    <Shimmer style={{minHeight: "450px", height: "100%"}} /> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          productList.length > 0 && (
            <div className="container my-5">
              <header className="mb-4">
                <h3>LATEST ARRIVALS</h3>
              </header>
              <div className="row">
                {productList.map((prod) => (
                  <ProductListItem key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
}

export default ProductList;
