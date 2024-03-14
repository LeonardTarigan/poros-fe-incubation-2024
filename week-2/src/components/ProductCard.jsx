import React from "react";

function ProductCard(props) {
  return <div>{props.name}</div>;
}

export default ProductCard;

ProductCard.propTypes = {
  name: String,
};
