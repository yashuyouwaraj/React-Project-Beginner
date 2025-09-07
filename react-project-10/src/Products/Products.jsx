import React from "react";
import "./Products.css";
import Card from "../components/card";



const Products = ({result}) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
