import React from "react";
import { Link } from "react-router-dom";
import NavbarV2 from "../components/NavbarV2";

function Register() {
  return (
    <>
      <NavbarV2 />
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2
                      className="text-uppercase text-center mb-4"
                      style={{ marginTop: "-2px", marginBottom: "2px" }}
                    >
                      New User ?
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          placeholder="Name"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          placeholder="Email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          placeholder="Password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          placeholder="Conform Password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Already have an account?{" "}
                        <Link to={"/login"}>
                          <a className="fw-bold text-body">
                            <u>Login here</u>
                          </a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
