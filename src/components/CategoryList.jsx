import axios from "axios";
import React, { useState, useEffect } from "react";
import CategoryListItem from "./CategoryListItem";
import { URL } from "../config/endpoint";
import Shimmer from "./shimmer/Shimmer";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const categories = await axios.get(
          URL + "/api/category/categories"
        );
        setCategoryList(categories.data);
        setLoading(false);
      } catch (error) {
        setCategoryList([]);
      }
    };
    getCategoryList();
  }, []);

  return (
    <>
      <section>
        {loading ?
          <div className="container my-5">
            {[...Array(8)].map((_, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                <div className="card w-100 my-2 shadow-2-strong" >
                  <div>
                    <Shimmer style={{ minHeight: "450px", height: "100%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          : (categoryList.length > 0 &&
            <div className="container my-5">
              <header className="mb-4">
                <h3>SHOP BY CATEGORY</h3>
              </header>
              <div className="row">
                {categoryList.map((cat) => (
                  <CategoryListItem key={cat.id} category={cat} />
                ))}
              </div>
            </div>
          )}
      </section>

    </>
  );
}

export default CategoryList;
