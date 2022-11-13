import React from "react";
import Card from "./Card";

const Table = () => {
  return (
    <Card className="container mt-5">
      <table >
        <thead style={{ padding: "20px" }}>
          <tr>
            <th>#</th>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
            <th>QTY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Mouse</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry standard
            </td>
            <td>10</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Mouse</td>
            <td>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry standard
            </td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
