import React from "react";
import Logo from "../assets/logo/01.svg";
import Calendar from "../assets/logo/calendar.svg";
import Chart from "../assets/logo/chart.svg";
import TimeCircle from "../assets/logo/timeCircle.svg";
import Wallet from "../assets/logo/wallet.svg";
import Location from "../assets/logo/location.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import Table from "./Table";

const data = [
  {
    icom: Calendar,
    pointNam: "PO Title:",
    pointInfo: "Sample Text",
  },
  {
    icom: Calendar,
    pointNam: "PO Start Date:",
    pointInfo: "July 28, 2021",
  },
  {
    icom: Calendar,
    pointNam: "PO End Date:",
    pointInfo: "July 30, 2021",
  },
  {
    icom: TimeCircle,
    pointNam: "Rest Days For PO Expiry:",
    pointInfo: "04 days",
  },
  {
    icom: Wallet,
    pointNam: "Payment Method:",
    pointInfo: "Credit Card",
  },
  {
    icom: Location,
    pointNam: "Delivery Place:",
    pointInfo: "15 Yemen Road, Yemen",
  },
  {
    icom: Wallet,
    pointNam: "Payment Grace Period:",
    pointInfo: "30 Days",
  },
];

const PurchaseOrder = () => {
  return (
    <div>
      <div className="container position-relative py-5">
        <div className="position-absolute top-35 start-0">
          <img src={Logo} alt="" />
        </div>
        <h1 class="pageTitle text-center">Purchase Order</h1>
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
      <Card className="container mt-5">
        <CardTitle titleName="Company Name: " titleInfo="Xyz Private Limited" />
        <hr />
        <div className="row">
          {data.map((item) => (
            <KeyPointInformation
              key={item}
              className="col-6 my-3"
              icon={item.icom}
              pointNam={item.pointNam}
              pointInfo={item.pointInfo}
            />
          ))}
        </div>
      </Card>
      <Table></Table>
    </div>
  );
};

export default PurchaseOrder;
