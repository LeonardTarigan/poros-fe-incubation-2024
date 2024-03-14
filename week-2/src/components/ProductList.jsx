import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
      {[...Array(10)].map((item, index) => {
        return <ProductCard key={index} name={`Product ${index}`} />;
      })}
    </>
  );
}

export default ProductList;
