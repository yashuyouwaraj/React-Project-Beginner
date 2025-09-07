import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btn">All Products</button>
          <button className="btn">Nike</button>
          <button className="btn">Adidas</button>
          <button className="btn">Puma</button>
          <button className="btn">Vans</button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
