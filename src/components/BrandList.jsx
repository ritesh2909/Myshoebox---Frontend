import React, { useState, useEffect } from "react";
import BrandListItem from "./BrandListItem";
import axios from "axios";
import  {URL}  from "../config/endpoint";

function BrandList() {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    const getBrandList = async () => {
      try {
        const brandListRes = await axios.get(
          URL + "/api/brand/brand"
        );
        setBrandList(brandListRes.data);
      } catch (error) {
        console.log(error);
        setBrandList([]);
      }
    };
    getBrandList();
  }, []);

  return (
    <section>
      <div className="container my-5">
        <header className="mb-4">
          <h3>SHOP BY BRAND</h3>
        </header>
        <div className="row">
          {brandList.map((brand) => (
            <div key={brand.id}>
              <BrandListItem brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandList;
