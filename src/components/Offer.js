import React from "react";
import Logo from "../assets/logo/01.svg";
import Calendar from "../assets/logo/calendar.svg";
import Chart from "../assets/logo/chart.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import StampCard from "./StampCard";
import Table from "./Table";
import PageHeader from "./PageHeader";

const Offer = () => {
  return (
    <div>
      <PageHeader title="Offer"></PageHeader>
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
          <CardTitle titleName="FROM: " />
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
          <CardTitle titleName="TO: " />
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
      <Table></Table>
      <div className="container">
        <StampCard title="Seller Stamp"></StampCard>
      </div>
    </div>
  );
};

export default Offer;
