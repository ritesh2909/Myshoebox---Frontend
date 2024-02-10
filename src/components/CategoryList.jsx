import axios from "axios";
import React, { useState, useEffect } from "react";
import CategoryListItem from "./CategoryListItem";
import  URL  from "../config/endpoint";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
 
  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const categories = await axios.get(
          URL + "/api/category/categories"
        );
        setCategoryList(categories.data);
      } catch (error) {
        setCategoryList([]);
      }
    };
    getCategoryList();
  }, []);

  return (
    <>
      <section>
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
      </section>
    </>
  );
}

export default CategoryList;
