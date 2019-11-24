import React from "react";

import "../assets/stylesheets/AveragePrice.css";

const AveragePrice = ({ average }) => {
  return (
    <div className="average-price-title">
      <div>
        <b>Average Price:</b>{" "}
      </div>
      <div className="price">{average ? `$ ${average}` : "-"}</div>
    </div>
  );
};

export default AveragePrice;
