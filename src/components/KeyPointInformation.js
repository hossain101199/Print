import React from "react";

const KeyPointInformation = ({ icon, pointNam, pointInfo, className }) => {
  return (
    <div
      id="keyPointInformation"
      className={`d-flex align-items-center gap-3 ${className}`}
    >
      {icon && <img src={icon} alt="" />}
      {pointNam && <p className="pointNam">{pointNam}</p>}
      {pointInfo && <p className="pointInfo">{pointInfo}</p>}
    </div>
  );
};

export default KeyPointInformation;
