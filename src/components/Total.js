import React from "react";

const Total = () => {
  return (
    <div
      id="total"
      className="container d-flex justify-content-end align-items-center"
    >
      <div className="totalVATExclusive d-flex flex-column align-items-center">
        <p>TOTAL </p>
        <p>*VAT Exclusive</p>
      </div>
      <div className="totalprice">
        <p>SR 5565</p>
      </div>
    </div>
  );
};

export default Total;
