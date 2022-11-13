import React from "react";
import PurchaseOrder from "./PurchaseOrder";
import Offer from "./Offer";
import Order from "./Order";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const MyDocument = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf" x={1} y={1} scale={0.5}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <PurchaseOrder></PurchaseOrder>
      </div>

      {/* <Offer></Offer>
      <Order></Order> */}
    </div>
  );
};

export default MyDocument;
