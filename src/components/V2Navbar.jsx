import React from "react";

function V2Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container justify-content-center justify-content-md-between">
          <button
            className="navbar-toggler border py-2 text-dark"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Hot offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Gift boxes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Menu item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Menu name
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default V2Navbar;
