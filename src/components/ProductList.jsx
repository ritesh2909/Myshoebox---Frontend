import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import  {URL}  from "../config/endpoint";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get(
        URL + "/api/products/home-page-products"
      );

      setProductList(products.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <section>
        {productList.length > 0 && (
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
        )}
      </section>
    </>
  );
}

export default ProductList;
