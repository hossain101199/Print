import React from "react";

const Total = ({ grandTotal }) => {
  return (
    <div
      id="total"
      className="p-0 d-flex align-items-center"
    >
      <div className="totalVATExclusive d-flex flex-column align-items-center">
        <p>TOTAL </p>
        <p>*VAT Exclusive</p>
      </div>
      <div className="totalprice">
        <p>SR {grandTotal ? grandTotal : "00"}</p>
      </div>
    </div>
  );
};

export default Total;
