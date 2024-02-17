import React from "react";
import Navbar from "../components/Navbar";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import Footer from "../components/Footer";
import  {URL}  from "../config/endpoint";

function Profile() {
  const { user, isFetching, error, dispatch } = useContext(Context);
  const [internalError, setInternalError] = useState(null);
  const [data, setData] = useState({});
  // const authToken = localStorage;
  const storedUserData = localStorage.getItem("user");
  const parsedUserData = JSON.parse(storedUserData);
  const authToken = parsedUserData.token;

  const handleChange = async (e) => {
    e.preventDefault();
    setInternalError(null);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await axios.get(
          `${URL}/api/user/${parsedUserData._id}`
        );

        setData(userDetails.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START", payload: user });
    try {
      const headers = {
        authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
      const res = await axios.put(
        `${URL}/api/user/edit-user`,

        {
          id: parsedUserData._id,
          mobile: data.mobile,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        },
        { headers }
      );
      if (res.status == 204) {
        try {
          const updatedUser = await axios.get(
            `${URL}/api/user/${parsedUserData._id}`
          );
          dispatch({ type: "UPDATE_SUCCESS", payload: updatedUser.data });
          window.alert("Profile Updated!");
        } catch (error) {
          console.log(error);
          dispatch({ type: "UPDATE_FAILURE", payload: user });
        }
      } else {
        setInternalError(res?.response?.data);
        dispatch({ type: "UPDATE_FAILURE", payload: user });
      }
    } catch (error) {
      if (error?.response?.data) {
        setInternalError(error.response.data);
        dispatch({ type: "UPDATE_FAILURE", payload: user });
      }
    }
  };

  return (
    <>
      <Navbar />
      {user && (
        <div className="container">
          {" "}
          <div className="row">
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        value={data.firstName}
                        onChange={handleChange}
                        name="firstName"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={data.lastName}
                        placeholder="last name"
                        onChange={handleChange}
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="number"
                        maxLength={10}
                        minLength={10}
                        className="form-control"
                        placeholder="phone number"
                        value={data.mobile}
                        onChange={handleChange}
                        name="mobile"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email-id"
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="address"
                        value={data.address}
                        onChange={handleChange}
                        name="fullAddress"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">city</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="city"
                        value={data.city}
                        onChange={handleChange}
                        name="city"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Pincode</label>
                      <input
                        type="number"
                        maxLength={6}
                        minLength={6}
                        className="form-control"
                        placeholder="pincode"
                        value={data.pincode}
                        onChange={handleChange}
                        name="pincode"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="state"
                        value={data.state}
                        onChange={handleChange}
                        name="state"
                      />
                    </div>
                  </div>
                  {internalError && (
                    <p style={{ color: "red", marginLeft: "160px" }}>
                      {internalError + "!"}
                    </p>
                  )}
                  <div className="mt-5 text-center">
                    <button className="btn btn-outline-primary" type="submit">
                      Save Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Profile;
