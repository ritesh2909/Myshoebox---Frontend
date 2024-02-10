import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">


        <div className="stashStyle" style={{ display: "flex", "justifyContent": "space-around" }}>
          <Link className="navbar-brand" to="/" style={{marginLeft: "20px"}} >
            MyShoeBox
          </Link>
          <div className="container-fluid" style={{ display: "flex", justifyContent: "space-evenly" }} >
            <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MEN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WOMEN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    KIDS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BRANDS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CUSTOMIZE
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search" style={{ "marginLeft": "130px" }} >
                <input
                  className="form-control me-8"
                  type="search"
                  placeholder="Search for products and brands"
                  aria-label="Search"
                  style={{ width: "29em" }}
                />
                <button className="btn btn-outline-primary" type="submit" style={{ marginLeft: "20px" }}>
                  Search
                </button>
              </form>
              <div className="collapse navbar-collapse" style={{ "marginLeft": "15rem" }}  >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/wishlist"}>
                      WISHLIST
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/bag"}>
                      BAG
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/profile-edit"}>
                      PROFILE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
