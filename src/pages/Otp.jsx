import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import "../styling/otp.css";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import  {URL}  from "../config/endpoint";

function Otp(props) {
  const location = useLocation();

  const { token, isFetching, dispatch } = useContext(Context);
  const [otp, setOtp] = useState(["", "", "", ""]); // State to hold the OTP digits

  const [error, setError] = useState(null);
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const getOtp = () => {
    let strOtp = "";
    for (let i of otp) {
      strOtp += i;
    }
    return strOtp;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let OTP = getOtp();
    if (OTP.length != 4) {
      setError("Invalid Otp!")
    }
    try {
      const res = await axios.post(URL + "/api/auth/otp-login", {
        mobile: props.mobile,
        otp: OTP,
      });
      if (res.status == 200) {
        dispatch({ type: "OTP_VERIFIED", payload: res.data });
        window.location.href = "/";
      } else {
        console.log(error);
        dispatch({ type: "OTP_FAILURE" });
        setError(res?.response?.data);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "OTP_FAILURE" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="otp-page">
        <div className="otp-card">
          <h2>OTP Verification</h2>
          <p>Please enter the OTP sent to your mobile number.</p>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <p className="resend-link">Resend OTP</p>
          {error && (
                        <p style={{ color: "red", marginLeft: "160px" }}>
                          {error + "!"}
                        </p>
                      )}
          <button className="btn btn-outline-primary" onClick={handleSubmit}>
            Submit
          </button>
          <div className="entraContent" style={{ marginTop: "30px" }}>
            <p>
              Log in using{" "}
              <Link to={"/login"} style={{ color: "blue" }}>
                Password
              </Link>
            </p>
            <p>
              Having trouble logging in?{" "}
              <Link style={{ color: "blue" }} to={"/get-help"}>
                Get help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
