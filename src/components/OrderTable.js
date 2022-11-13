import React from "react";
import Card from "./Card";

const OrderTable = ({ tableData }) => {
  return (
    <Card className="container mt-5">
      <table>
        <thead style={{ padding: "20px" }}>
          <tr>
            <th>#</th>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
            <th>QTY</th>
            <th>UNITE PRICE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.offer_serial_number}>
              <td>{data.offer_serial_number}</td>
              <td>{data.item_name}</td>
              <td>{data.item_description}</td>
              <td>{data.quantity}</td>
              <td>{data.unit_price}</td>
              <td>{data.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default OrderTable;
