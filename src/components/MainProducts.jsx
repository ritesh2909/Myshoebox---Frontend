import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import { URL } from "../config/endpoint";
import { useLocation, useParams } from 'react-router-dom';
import NoProductFound from "./NoProductFound";
import axios from "axios";

function MainProducts() {
  const { gender } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hasGenderParam = searchParams.has('gender');

  const { token } = useContext(Context);

  const [appliedCatFilter, setAppliedCatFilter] = useState([]);
  const [appliedColorFilter, setAppliedColorFilter] = useState([]);
  const [appliedBrandFilter, setAppliedBrandFilter] = useState([]);

  const [appliedSortingOption, setAppliedSortingOption] = useState(null);

  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableSortingOptions, setavailableSortingOptions] = useState([]);

  const [availableColors, setAvailableColors] = useState([]);

  const updateCategoryFilter = async (e) => {
    let preAppliedCat = [...appliedCatFilter];
    if (preAppliedCat.length > 0) {
      const index = preAppliedCat.indexOf(e.category._id);
      if (index !== -1) {
        preAppliedCat.splice(index, 1);
      } else {
        preAppliedCat.push(e.category._id);
      }
    } else {
      preAppliedCat.push(e.category._id);
    }

    setAppliedCatFilter(preAppliedCat);
  };

  const updateBrandFilter = async (e) => {
    let preAppliedBrand = [...appliedBrandFilter];

    if (preAppliedBrand.length > 0) {
      const index = preAppliedBrand.indexOf(e.brand._id);
      if (index !== -1) {
        preAppliedBrand.splice(index, 1);
      } else {
        preAppliedBrand.push(e.brand._id);
      }
    } else {
      preAppliedBrand.push(e.brand._id);
    }
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

  const updateSortingOption = async (e) => {
    e.preventDefault();
    setAppliedSortingOption(e.target.value)
  }

  useEffect(() => {
    const fetchFilters = async (e) => {
      const filterRes = await axios.post(
        URL + "/api/products/filters",
        {}
      );
      setAvailableBrands(filterRes.data.brands);
      setAvailableCategories(filterRes.data.categories);
      setAvailableColors(filterRes.data.colors);
    };
    const fetchSortingOptions = async (e) => {
      try {
        const sortingOptionsRes = await axios.get(`${URL}/api/cms/sorting-options`);
        setavailableSortingOptions(sortingOptionsRes.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchFilters();
    fetchSortingOptions();
  }, []);

  useEffect(() => {
    let gender;
    if (hasGenderParam) {
      gender = searchParams.get("gender")
        document.title = `Online ${gender}s Footwear shopping site - MyShoebox`
    }
    console.log(gender)
    const fetchProducts = async () => {
      console.log(gender)
      const productsRes = await axios.post(
        URL + "/api/products/products",
        {
          categories: appliedCatFilter,
          brands: appliedBrandFilter,
          colors: appliedColorFilter,
          gender: gender,
          sortingOption: appliedSortingOption
        }
      );
      console.log(productsRes)
      setAvailableProducts(productsRes.data);
    };
    fetchProducts();
  }, [appliedCatFilter, appliedBrandFilter, appliedColorFilter, appliedSortingOption, location]);

  const addToWishList = async (e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to wishlist");
      return;
    }

    try {
      const addToWish = await axios.post(
        URL + `/api/wishlist/addtowishlist/${props.product.defaultVarient.productId}/${user._id}`,
        {
          color: props.product.defaultVarient.color,
          size: props.product.defaultVarient.size,
        },
        { headers }
      );

      if (addToWish.status == 200) {
        window.alert(addToWish.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (e) => {
    e.preventDefault();
    if (!token) {
      window.alert("Login to add to Cart");
      return;
    }

    try {
      const addToCart = await axios.post(
        URL + `/api/cart/add-to-cart`,
        { color: color, size: size, productId: baseProductInfo.productId },
        { headers }
      );

      if (addToCart.status == 200) {
        window.alert(addToCart.data);
      } else if (addToCart.response.status == 401) {
        window.alert("Please try log in!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* later todo top blue section -> stepper */}
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
            {/* left sidebar */}
            <>
              <div
                className="col-lg-3"
                style={{ borderRight: "0.1rem solid #cdcdcd" }}
              >
                <div id="navbarSupportedContent1">
                  <div id="accordionPanelsStayOpenExample">

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
                                    {colorItem.color.charAt(0).toUpperCase() + colorItem.color.slice(1).toLowerCase()}
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

            {/* product list */}

            {availableProducts.length === 0 &&
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3"> <NoProductFound /></header>
            }

            {availableProducts.length > 0 && <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">
                  {availableProducts.length} Items found{" "}
                </strong>

                {/* sorting list */}
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto border pt-1" onChange={(e) => updateSortingOption(e)}  >
                    {availableSortingOptions.length > 0 &&
                      availableSortingOptions.map((item) => (
                        <option key={item.key} value={item.key} >{item.value}</option>
                      ))
                    }
                  </select>
                </div>
              </header>

              {/* main product list item */}

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
                          to={`/product-info/${prodItem.productId}/?color=${prodItem.color}`}
                        >
                          <img
                            src={prodItem.thumbnail}
                            className="card-img-top"
                            style={{ minHeight: "410px" }}
                          />
                        </Link>
                        <div className="card-body d-flex flex-column">
                          <Link
                            to={`/product-info/${prodItem.productId}/?color=${prodItem.color}`}
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
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto" style={{ justifyContent: "space-around" }} >
                            <a
                              href="#!"
                              className="btn btn-primary shadow-0 me-1"
                              onClick={addToCart}
                              style={{ marginBottom: "15px" }}
                            >
                              Add to cart
                            </a>
                            <a
                              href="#!"
                              className="btn btn-light border icon-hover px-2 pt-2"
                              onClick={addToWishList}
                              style={{ marginBottom: "15px" }}
                            >
                              Love it!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <hr />

              {/* bottom pagination */}
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
            </div>}



          </div>
        </div>
      </section>
    </>
  );
}

export default MainProducts;
