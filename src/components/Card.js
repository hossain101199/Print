import React from "react";

const Card = ({ children, className }) => {
  return (
    <div id="card" className={`${className}`}>
      {children}
    </div>
  );
};

export default Card;
