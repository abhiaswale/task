import React from "react";
import "./main.css";
const Product = ({ data }) => {
  return (
    <div className="product">
      <p>{data.title}</p>
      <p>&#8377; {data.price}</p>
    </div>
  );
};

export default Product;
