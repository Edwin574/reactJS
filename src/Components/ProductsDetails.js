import React from "react";

import Button from "./Button";

let productCount = 0;

function displayFormattedProductCount() {
  return productCount > 0 ? productCount : "zero";
}

// function mouseOver() {
//     console.log('mouse over event happened')
// }

function ProductDetails(props) {
  let badgeClass = "badge-margin-left-100 badge";

  badgeClass += props.isAvailable ? " bg-success" : " bg-danger";
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        {props.price}
      </h6>
      <Button>-</Button>
      <span style={{ padding: "0px 14px", fontSize: 12 }}>
        {displayFormattedProductCount()}
      </span>
      <Button>+</Button>
      {/* <span className={badgeClass}>{isAvailable}>
      Available</span> */}
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
