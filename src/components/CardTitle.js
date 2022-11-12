import React from "react";

const CardTitle = ({ titleName, titleInfo }) => {
  return (
    <div id="cardTitle" className="d-flex gap-3">
      <h3>{titleName}</h3>
      {titleInfo && <h3 className="titleInfo">{titleInfo}</h3>}
    </div>
  );
};

export default CardTitle;
