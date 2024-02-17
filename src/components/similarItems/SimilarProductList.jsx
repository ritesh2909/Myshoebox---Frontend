import axios from "axios";
import React, { useState, useEffect } from "react";
import SimilarProductListItem from "./SimilarProductListItem";
import  {URL}  from "../../config/endpoint";

function SimilarProductList(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get(
        URL + `/api/products/you-may-also-like/${props.productId}/?color=${props.color}`
      );

      setProductList(products.data.varients);
    };
    getProducts();
  }, []);

  return (
    <>
      <section>
        {productList.length > 0 && (
          <div className="container my-5">
            <div className="row">
              {productList.map((prod) => (
                <SimilarProductListItem key={prod._id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default SimilarProductList;
