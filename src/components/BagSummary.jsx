import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import  URL  from "../config/endpoint";

function BagSummary() {
  const { token, isFetching, error, dispatch } = useContext(Context);
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const [charges, setCharges] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);

  const renderNestedObject = (nestedObject) => {
    return `Rs ${JSON.stringify(nestedObject)}`;
  };

  useEffect(() => {
    const getCheckoutInfo = async () => {
      try {
        const url = `${URL}/api/cart/checkout-info`;
        const checkoutInfo = await axios.get(url, { headers });

        setCharges(checkoutInfo.data.otherCharges);
        setGrandTotal(checkoutInfo.data.grandTotal);
        setTotalMRP(checkoutInfo.data.totalMRP);
      } catch (error) {
        console.log(error);
      }
    };
    getCheckoutInfo();
  }, []);

  return (
    <>
      <div style={{ width: "300px" }}>
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {charges.length > 0 &&
                charges.map((charge) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <div>
                      <p>{Object.keys(charge)[0]}</p>
                    </div>
                    <span>
                      <p>Rs {Object.values(charge)[0]} /-</p>
                    </span>
                  </li>
                ))}

              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                <div>
                  <p>Total Discount</p>
                </div>
                <span>
                  <p>Rs {totalMRP - grandTotal} /- </p>
                </span>
              </li>

              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                style={{ marginTop: "40px" }}
              >
                <div>
                  <strong>Total Amount</strong>
                </div>
                <span>
                  <strong>Rs {grandTotal}</strong> /-
                </span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary">
              <Link
                to={"/checkout"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Go to Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BagSummary;
