import React from "react";
import { Document } from "@react-pdf/renderer";

import PurchaseOrder from "./PurchaseOrder";
import Offer from "./Offer";
import Order from "./Order";

const MyDocument = () => {
  return (
    <Document>
      <PurchaseOrder></PurchaseOrder>
      <Offer></Offer>
      <Order></Order>
    </Document>
  );
};

export default MyDocument;
