import React from "react";
import Logo from "../assets/logo/01.svg";

const PageHeader = ({title}) => {
  return (
    <div>
      <div className="container position-relative py-5">
        <div className="position-absolute top-35 start-0">
          <img src={Logo} alt="" />
        </div>
        <h1 class="pageTitle text-center">{title}</h1>
      </div>
      <hr className="mb-5" />
    </div>
  );
};

export default PageHeader;
