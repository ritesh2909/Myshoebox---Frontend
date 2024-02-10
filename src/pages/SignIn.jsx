import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { CircularProgress } from "@material-ui/core";
import { Context } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
import  URL  from "../config/endpoint";
import Otp from "./Otp";

function SignIn() {
  const { user, isFetching, dispatch, error } = useContext(Context);
  const [internalError, setInternalError] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(URL + "/api/auth/signin", {
        mobile: mobileNumber,
      });

      if (res.status == 204) {
        // navigate to otp screen
        dispatch({ type: "OTP_SENT" });
        setOtpSent(true)
      } else {
        // failure to send otp
        dispatch({ type: "OTP_FAILURE" });
        setInternalError("Internal Server Error");
      }
    } catch (error) {
      dispatch({ type: "OTP_FAILURE" });
      if (error?.response?.data) {
        setInternalError(error.response.data);
      }
      console.log(error);
    }
  };

  const handleChecks = async (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue.length <= 10) {
      setMobileNumber(inputValue);
    }
    setInternalError(null);
  };

  const checkHandling = async (e) => {
    e.preventDefault();
    if (mobileNumber.length != 10) {
      setInternalError("Mobile Number invalid!");
    }
  };

  return (
    <>
    {otpSent ? <Otp mobile = {mobileNumber} /> : <>
    
    <Navbar />
      <div className="container">
        <div className="container">
          <div className="container">
            <section className="vh-100">
              <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="col-md-8 col-lg-7 col-xl-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      className="img-fluid"
                      alt="Phone image"
                    />
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <h5
                          style={{ marginLeft: "12px", marginBottom: "18px" }}
                        >
                          Enter mobile number to continue
                        </h5>
                        <input
                          type="number"
                          minLength={10}
                          value={mobileNumber}
                          maxLength={10}
                          placeholder="Mobile"
                          onChange={handleChecks}
                          id="form1Example13"
                          className="form-control form-control-lg"
                        />
                      </div>
                      {internalError && (
                        <p style={{ color: "red", marginLeft: "160px" }}>
                          {internalError + "!"}
                        </p>
                      )}
                      <button
                        className="btn btn-outline-primary"
                        disabled={isFetching}
                      >
                        {isFetching ? (
                          <CircularProgress
                            style={{ color: "white" }}
                            size="24px"
                          />
                        ) : (
                          "CONTINUE"
                        )}
                      </button>
                    </form>
                    <div className="container">
                      <p
                        className="text-center text-muted mt-5 mb-0"
                        style={{ marginTop: "-80px" }}
                      >
                        Sign in using {"  "}
                        <Link to={"/login"}>
                          <a className="fw-bold text-body">email</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>}
     
    </>
  );
}

export default SignIn;
