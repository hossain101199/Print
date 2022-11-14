import React, { useRef } from "react";
import PurchaseOrder from "./PurchaseOrder";
import ReactToPrint from "react-to-print";
import Offer from "./Offer";
import Order from "./Order";

// 

const MyDocument = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <PurchaseOrder></PurchaseOrder>
        <Offer></Offer>
        <Order></Order>
      </div>
    </div>
  );
};

export default MyDocument;
