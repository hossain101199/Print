import React from "react";

const StampCard = ({ stamp, purchaserName = "Purchaser Name" }) => {
  console.log(stamp);
  return (
    <div className="d-flex align-items-center justify-content-between p-0">
      <div id="stampCard">
        <img src={stamp} alt="" />
      </div>
      <p id="purchaserName">{purchaserName}</p>
    </div>
  );
};

export default StampCard;
