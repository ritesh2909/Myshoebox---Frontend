import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";


function CartSingleItem(props) {
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <Link to={""} style={{ textDecoration: "none" }}>
                <img
                  src={props.item.thumbnail}
                  className="w-100"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p>
              <Link to={""} style={{ textDecoration: "none" }}>
                <strong style={{ cursor: "pointer" }}>
                  {" "}
                  {props.item.title}{" "}
                </strong>
              </Link>
            </p>
            <p>Color: {props.item.color}</p>
            <p>Size: {props.item.size} </p>

            <button
              type="button"
              className="btn btn-primary btn-sm me-1 mb-2"
              data-mdb-toggle="tooltip"
              title="Remove item"
            >
              <RemoveIcon />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm mb-2"
              data-mdb-toggle="tooltip"
              title="Move to the wish list"
            >
              <FavoriteBorderIcon />
            </button>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex mb-4" style={{ "max-width": "300px" }}>
              <button
                className="btn btn-primary px-3 me-2"
                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
                <RemoveIcon />
              </button>

              <div className="form-outline">
                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  value="1"
                  type="number"
                  className="form-control"
                />
              </div>

              <button className="btn btn-primary px-3 ms-2" onClick="">
                <AddIcon />
              </button>
            </div>

            <p
              className="text-start text-md-center"
              style={{ marginTop: "85px" }}
            >
              {/* <strong>Price</strong> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "} */}
              <strong>
                Rs.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"   "}
                {props.item.discountPrice}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSingleItem;
