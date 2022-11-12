import React from "react";

const StampCard = ({ title = "" }) => {
  return (
    <div id="stampCard" className="container ">
      {title}
    </div>
  );
};

export default StampCard;
