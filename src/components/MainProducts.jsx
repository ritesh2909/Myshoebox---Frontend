import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import  URL  from "../config/endpoint";

import axios from "axios";
function MainProducts() {
  // const { gender } = useParams();

  const [appliedCatFilter, setAppliedCatFilter] = useState([]);
  const [appliedColorFilter, setAppliedColorFilter] = useState([]);
  const [appliedBrandFilter, setAppliedBrandFilter] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableGender, setAvailableGender] = useState([]);

  const [currentGender, setCurrentGender] = useState(null);
  const [availableColors, setAvailableColors] = useState([]);

  const changeGender = async (e) => {
    setCurrentGender(e);
  };

  const updateCategoryFilter = async (e) => {
    let preAppliedCat = [...appliedCatFilter];
    console.log(preAppliedCat);
    if (preAppliedCat.length > 0) {
      const index = preAppliedCat.indexOf(e.category._id);
      console.log(index);
      if (index !== -1) {
        preAppliedCat.splice(index, 1);
      } else {
        preAppliedCat.push(e.category._id);
      }
    } else {
      preAppliedCat.push(e.category._id);
    }

    // console.log(preAppliedCat);
    setAppliedCatFilter(preAppliedCat);
  };

  const updateBrandFilter = async (e) => {
    let preAppliedBrand = [...appliedBrandFilter];

    if (preAppliedBrand.length > 0) {
      const index = preAppliedBrand.indexOf(e.brand._id);
      console.log(index);
      if (index !== -1) {
        preAppliedBrand.splice(index, 1);
      } else {
        preAppliedBrand.push(e.brand._id);
      }
    } else {
      preAppliedBrand.push(e.brand._id);
    }

    // console.log(preAppliedBrand);
    setAppliedBrandFilter(preAppliedBrand);
  };

  const updateColorFilter = async (e) => {
    let preAppliedColor = [...appliedColorFilter];

    if (preAppliedColor.length > 0) {
      const index = preAppliedColor.indexOf(e.color);

      if (index !== -1) {
        preAppliedColor.splice(index, 1);
      } else {
        preAppliedColor.push(e.color);
      }
    } else {
      preAppliedColor.push(e.color);
    }

    setAppliedColorFilter(preAppliedColor);
  };

  useEffect(() => {
    const fetchFilters = async (e) => {
      const filterRes = await axios.post(
        URL + "/api/products/filters",
        {}
      );
      setAvailableBrands(filterRes.data.brands);
      setAvailableCategories(filterRes.data.categories);
      setAvailableColors(filterRes.data.colors);
      setAvailableGender(filterRes.data.genders);
    };
    fetchFilters();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsRes = await axios.post(
        URL + "/api/products/products",
        {
          categories: appliedCatFilter,
          brands: appliedBrandFilter,
          colors: appliedColorFilter,
        }
      );
      setAvailableProducts(productsRes.data);
      console.log(productsRes.data);
    };
    fetchProducts();
  }, [appliedCatFilter, appliedBrandFilter, appliedColorFilter]);

  return (
    <>
      <header style={{ marginTop: "55px" }}>
        <div className="bg-primary">
          <div className="container py-4">
            <nav className="d-flex">
              <h6 className="mb-0">
                <Link to={"/"} className="text-white-50">
                  Home
                </Link>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a href="" className="text-white-50">
                  Library
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a href="" className="text-white">
                  <u>Data</u>
                </a>
              </h6>
            </nav>
          </div>
        </div>
      </header>
      <br />
      <br />

      <section className="">
        <div className="container">
          <div className="row">
            <>
              <div
                className="col-lg-3"
                style={{ borderRight: "0.1rem solid #cdcdcd" }}
              >
                <div id="navbarSupportedContent1">
                  <div id="accordionPanelsStayOpenExample">
                    {/* gender */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h5 style={{ marginLeft: "14px" }}>GENDER</h5>
                      <div>
                        {availableGender &&
                          availableGender.length > 0 &&
                          availableGender.map((genderItem) => (
                            <div
                              onClick={() => changeGender(genderItem)}
                              key={genderItem}
                            >
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id={genderItem}
                                  value={genderItem}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={genderItem}
                                  style={{ userSelect: "none" }}
                                >
                                  {genderItem}
                                </label>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <br />

                    {/* categories */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        justifyItems: "center",
                      }}
                    >
                      <h5 style={{ marginLeft: "14px" }}>CATEGORIES</h5>
                      <div>
                        {availableCategories &&
                          availableCategories.length > 0 &&
                          availableCategories.map((catItem) => (
                            <div key={catItem.category._id}>
                              <div>
                                <div className="form-check">
                                  <div className="te">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id={catItem.category.name}
                                      onClick={() =>
                                        updateCategoryFilter(catItem)
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={catItem.category.name}
                                      style={{ userSelect: "none" }}
                                    >
                                      {catItem.category.name}
                                    </label>
                                  </div>
                                  <span
                                    className="badge badge-secondary float-end"
                                    style={{
                                      color: "grey",
                                      marginTop: "-22px",
                                    }}
                                  >
                                    {catItem.count}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <br />

                    {/* brands */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h5 style={{ marginLeft: "14px" }}>BRANDS</h5>
                      <div>
                        {availableBrands &&
                          availableBrands.length > 0 &&
                          availableBrands.map((brandItem) => (
                            <div key={brandItem.brand._id}>
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={brandItem.brand.name}
                                    onClick={() => updateBrandFilter(brandItem)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={brandItem.brand.name}
                                    style={{ userSelect: "none" }}
                                  >
                                    {brandItem.brand.name}
                                  </label>
                                  <span
                                    className="badge badge-secondary float-end"
                                    style={{
                                      color: "grey",
                                      marginTop: "1px",
                                    }}
                                  >
                                    {brandItem.count}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <br />

                    {/* colors */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h5 style={{ marginLeft: "14px" }}>COLORS</h5>
                      <div>
                        {availableColors &&
                          availableColors.length > 0 &&
                          availableColors.map((colorItem) => (
                            <div key={colorItem.color}>
                              <div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={colorItem.color}
                                    onClick={() => updateColorFilter(colorItem)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={colorItem.color}
                                    style={{ userSelect: "none" }}
                                  >
                                    {colorItem.color}
                                  </label>
                                  <span
                                    className="badge badge-secondary float-end"
                                    style={{
                                      color: "grey",
                                      marginTop: "5px",
                                    }}
                                  >
                                    {colorItem.count}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* price TODO */}
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="button text-dark bg-light"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Price
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body">
                          <div className="range">
                            <input
                              type="range"
                              className="form-range"
                              id="customRange1"
                            />
                          </div>
                          <div className="row mb-3">
                            <div className="col-6">
                              <p className="mb-0">Min</p>
                              <div className="form-outline">
                                <input
                                  type="number"
                                  id="typeNumber"
                                  className="form-control"
                                />
                                <label className="form-label" for="typeNumber">
                                  $0
                                </label>
                              </div>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">Max</p>
                              <div className="form-outline">
                                <input
                                  type="number"
                                  id="typeNumber"
                                  className="form-control"
                                />
                                <label className="form-label" for="typeNumber">
                                  $1,0000
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-white w-100 border border-secondary"
                          >
                            apply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button text-dark bg-light"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#panelsStayOpen-collapseFour"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFour"
                        >
                          Size
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body">
                          <input
                            type="checkbox"
                            className="btn-check border justify-content-center"
                            id="btn-check1"
                            checked
                            autocomplete="off"
                          />
                          <label
                            className="btn btn-white mb-1 px-1"
                            style={{ width: "60px" }}
                            htmlFor="btn-check1"
                          >
                            XS
                          </label>
                          <input
                            type="checkbox"
                            className="btn-check border justify-content-center"
                            id="btn-check2"
                            checked
                            autocomplete="off"
                          />
                          <label
                            className="btn btn-white mb-1 px-1"
                            style={{ width: "60px" }}
                            htmlFor="btn-check2"
                          >
                            SM
                          </label>
                          <input
                            type="checkbox"
                            className="btn-check border justify-content-center"
                            id="btn-check3"
                            checked
                            autocomplete="off"
                          />
                          <label
                            className="btn btn-white mb-1 px-1"
                            style={{ width: "60px" }}
                            htmlFor="btn-check3"
                          >
                            LG
                          </label>
                          <input
                            type="checkbox"
                            className="btn-check border justify-content-center"
                            id="btn-check4"
                            checked
                            autocomplete="off"
                          />
                          <label
                            className="btn btn-white mb-1 px-1"
                            style={{ width: "60px" }}
                            htmlFor="btn-check4"
                          >
                            XXL
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button text-dark bg-light"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#panelsStayOpen-collapseFive"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFive"
                        >
                          Ratings
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFive"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-secondary"></i>
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-secondary"></i>
                              <i className="fas fa-star text-secondary"></i>
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-secondary"></i>
                              <i className="fas fa-star text-secondary"></i>
                              <i className="fas fa-star text-secondary"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </>

            <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">
                  {availableProducts.length} Items found{" "}
                </strong>
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto border pt-1">
                    <option value="0">Best match</option>
                    <option value="1">Recommended</option>
                    <option value="2">High rated</option>
                    <option value="3">Randomly</option>
                  </select>
                  <div className="btn-group shadow-0 border">
                    <a href="#" className="btn btn-light" title="List view">
                      <i className="fa fa-bars fa-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-light active"
                      title="Grid view"
                    >
                      <i className="fa fa-th fa-lg"></i>
                    </a>
                  </div>
                </div>
              </header>

              <div className="row">
                {availableProducts &&
                  availableProducts.length > 0 &&
                  availableProducts.map((prodItem) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 d-flex"
                      key={prodItem._id}
                    >
                      <div className="card w-100 my-2 shadow-2-strong">
                        <Link
                          to={`/${prodItem.productId}/?color=${prodItem.color}`}
                        >
                          <img
                            src={prodItem.thumbnail}
                            className="card-img-top"
                          />
                        </Link>
                        <div className="card-body d-flex flex-column">
                          <Link
                            to={`/${prodItem.productId}/?color=${prodItem.color}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="d-flex flex-row">
                              <h5 className="mb-1 me-1">
                                ₹{prodItem.discountPrice}
                              </h5>
                              <span className="text-danger">
                                <s>₹{prodItem.price}</s>
                              </span>
                            </div>
                            <p className="card-text">{prodItem.title}</p>
                          </Link>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <a
                              href="#!"
                              className="btn btn-primary shadow-0 me-1"
                            >
                              Add to cart
                            </a>
                            <a
                              href="#!"
                              className="btn btn-light border icon-hover px-2 pt-2"
                            >
                              <i className="fas fa-heart fa-lg text-secondary px-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <hr />

              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3"
              >
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProducts;
