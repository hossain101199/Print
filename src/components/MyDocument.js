import React from "react";
import PurchaseOrder from "./PurchaseOrder";
import Offer from "./Offer";
import Order from "./Order";
import { PDFDownloadLink } from "@react-pdf/renderer";

const MyDocument = () => {
  return (
    <div>
      <PDFDownloadLink document={<PurchaseOrder />} filename="PurchaseOrder">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>

      <PurchaseOrder></PurchaseOrder>
      <Offer></Offer>
      <Order></Order>
    </div>
  );
};

export default MyDocument;
