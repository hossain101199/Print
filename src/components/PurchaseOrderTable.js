import React from "react";
import Card from "./Card";

const PurchaseOrderTable = ({ tableData }) => {
  return (
    <Card className="container mt-5">
      <table>
        <thead style={{ padding: "20px" }}>
          <tr>
            <th>#</th>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, idex) => (
            <tr key={data}>
              <td>{idex+1}</td>
              <td>{data.item_name}</td>
              <td>{data.item_description}</td>
              <td>{data.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default PurchaseOrderTable;
