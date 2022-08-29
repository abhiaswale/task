import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://s3.amazonaws.com/open-to-cors/assignment.json"
      );
      const data = await response.json();
      let arr = [];

      for (let key in data.products) {
        arr.push(data.products[key]);
      }
      setProducts(arr.sort((a, b) => b.popularity - a.popularity));
    };
    getProducts();
  }, []);
  return (
    <div className="main-wrapper">
      <div className="products-wrapper">
        {products.length > 0 && (
          <div>
            <div className="product">
              <h5>TITLE</h5>
              <h5>PRICE</h5>
            </div>
            {products.map((e, i) => (
              <Product data={e} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
