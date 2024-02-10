import React from "react";

function BrandListItem(props) {
  if (!props.category) {
    return null; // not products available
  }
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2 shadow-2-strong">
          <img
            src={props.brand.logo}
            className="card-img-top"
            style={{ aspectRatio: "1 / 1", cursor: "pointer" }}
            alt={props.brand.name}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {props.brand.name}
            </h5>
            <p className="card-text" style={{ cursor: "pointer" }}>
              {props.brand?.description}
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandListItem;
