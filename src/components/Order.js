import React from "react";
import { Page } from "@react-pdf/renderer";
import Logo from "../assets/logo/01.svg";
import Calendar from "../assets/logo/calendar.svg";
import Chart from "../assets/logo/chart.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import Total from "./Total";
import StampCard from "./StampCard";

const Order = () => {
  return (
    <Page>
      <div className="container position-relative py-5">
        <div className="position-absolute top-35 start-0">
          <img src={Logo} alt="" />
        </div>
        <h1 class="pageTitle text-center">Order</h1>
      </div>
      <hr className="mb-5" />
      <div className="container d-flex align-items-center">
        <KeyPointInformation
          className="me-5"
          icon={Calendar}
          pointNam="Date:"
          pointInfo="July 30, 2021"
        />
        <KeyPointInformation
          className="me-5"
          icon={Chart}
          pointNam="PO Number:"
          pointInfo="02157"
        />
      </div>
      <div className="d-flex container gap-3">
        <Card className="container mt-5">
          <CardTitle titleName="Requester Company Information " />
          <hr />
          <div className="">
            {[1, 2, 3].map((item) => (
              <KeyPointInformation
                key={item}
                className=" my-3"
                pointNam="PO Number:"
                pointInfo="02157"
              />
            ))}
          </div>
        </Card>
        <Card className="container mt-5">
          <CardTitle titleName="Supplier Company Information" />
          <hr />
          <div className="">
            {[1, 2, 3].map((item) => (
              <KeyPointInformation
                key={item}
                className=" my-3"
                pointNam="PO Number:"
                pointInfo="02157"
              />
            ))}
          </div>
        </Card>
      </div>
      <Card className="container mt-5">
        <table width="100%">
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
              <td>Emil</td>
              <td>Tobias</td>
              <td>Linus</td>
              <td>Linus</td>
            </tr>
            <tr>
              <td>16</td>
              <td>14</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Total></Total>
      <div className="container">
        {[1, 2, 3].map((item) => (
          <KeyPointInformation
            key={item}
            className=" my-3"
            pointNam="PO Number:"
            pointInfo="02157"
          />
        ))}
      </div>
      <StampCard title="Purchaser Stamp"></StampCard>
    </Page>
  );
};

export default Order;
