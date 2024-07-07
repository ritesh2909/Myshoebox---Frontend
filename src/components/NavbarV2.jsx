import React from 'react'
import { Link } from "react-router-dom";
import { appRoutes } from "../config/endpoint";
import CartV2 from './cartv2/CartV2';

function OffShore() {
  return (
    <div className="offcanvas offcanvas-end custom-offcanvas" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" data-bs-backdrop="true">
      <CartV2 />
    </div >
  );
}

function NavbarV2() {

  return (
    <>
      <OffShore />

      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top px-8" style={{ minHeight: "85px", margin: "0 auto", paddingLeft: "30px", paddingRight: "30px" }} >
        <div class="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginLeft: "20px" }} >
            MyShoeBox
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/products?gender=Men"} >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products?gender=Women"} >
                  Women
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/products?gender=Kids"} >
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customize
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Service 1</a></li>
                  <li><a class="dropdown-item" href="#">Service 2</a></li>
                  <li><a class="dropdown-item" href="#">Service 3</a></li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex mx-auto">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ flex: 1, minWidth: "500px" }} />
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={appRoutes.Wishlist}>
                  <i class="fa-regular fa-heart"></i>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile-edit"}>
                  <i class="fa-regular fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavbarV2