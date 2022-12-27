import React from "react";
import { useState } from "react";
import Button from "./Button";

// function mouseOver() {
//     console.log('mouse over event happened')
// }

function ProductDetails(props) {
  let badgeClass = "badge-margin-left-100 badge";
  badgeClass += props.isAvailable ? " bg-success" : " bg-danger";
    // let productCount = 0;
    let [productCount,updateCount]=useState(0)

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "zero";
  }

  let incrementProductCount = function () {
    // productCount++;
    // console.log(productCount);
      updateCount(++productCount)
  };
  let decrementProductCount = function () {
    // productCount--;
    // console.log(productCount);
    updateCount(--productCount)
  };
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        {props.price}
      </h6>
      <Button eventHandler={decrementProductCount}>-</Button>
      <span style={{ padding: "0px 14px", fontSize: 12 }}>
        {displayFormattedProductCount()}
      </span>
      <Button eventHandler={incrementProductCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
