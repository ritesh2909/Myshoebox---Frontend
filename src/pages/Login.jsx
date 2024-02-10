import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";
import { LoginFailure, LoginStart, LoginSuccess } from "../context/Action";
import  URL  from "../config/endpoint";

function Login() {
  const { user, isFetching, error, dispatch } = useContext(Context);
  const [internalError, setInternalError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(URL + "/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.href = "/";
    } catch (error) {
      if (error?.response?.data) {
        setInternalError(error.response.data);
      }
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInternalError(null);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
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
                      Login
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            placeholder="Email"
                            id="form3Example3cg"
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            placeholder="Password"
                            id="form3Example4cg"
                            onChange={handleChange}
                            value={data.password}
                            name="password"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      {internalError && (
                        <p style={{ color: "red", marginLeft: "160px" }}>
                          {internalError + "!"}
                        </p>
                      )}
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-outline-primary"
                          style={{ marginTop: "14px" }}
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <div className="extraContent">
                        <p className="text-center text-muted mt-5">
                          Login using{" "}
                          <Link to={"/signin"}>
                            <a className="fw-bold text-body">
                              <u>mobile</u>
                            </a>
                          </Link>
                        </p>
                        <p className="text-center text-muted mt-2">
                          Forgot your password?{" "}
                          <Link to={"/register"}>
                            <a className="fw-bold text-body">
                              <u>Reset here</u>
                            </a>
                          </Link>
                        </p>
                        <p className="text-center text-muted mt-2">
                          Don't have an account?{" "}
                          <Link to={"/register"}>
                            <a className="fw-bold text-body">
                              <u>Register here</u>
                            </a>
                          </Link>
                        </p>
                      </div>
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

export default Login;
