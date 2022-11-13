import React from "react";
import Calendar from "../assets/logo/calendar.svg";
import Chart from "../assets/logo/chart.svg";
import TimeCircle from "../assets/logo/timeCircle.svg";
import Wallet from "../assets/logo/wallet.svg";
import Location from "../assets/logo/location.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import PageHeader from "./PageHeader";
import PurchaseOrderTable from "./PurchaseOrderTable";

const data = {
  requester_logo: "http://127.0.0.1:8000/api/po-detail-for-pdf/3/",
  po_end_date: "2019-08-24",
  po_number: "string",
  po_title: "string",
  po_start_date: "2019-08-24",
  po_expires_in: 0,
  payment_method: 1,
  delicery_place: "string",
  payment_grace_period: "45",
  po_items: [
    {
      item_name: "String",
      item_description: "STRING",
      quantity: 0,
    },
  ],
};

const PurchaseOrder = () => {
  return (
    <div>
      <PageHeader title="Purchase Order"></PageHeader>
      <div className="container d-flex align-items-center">
        <KeyPointInformation
          className="me-5"
          icon={Calendar}
          pointNam="Date:"
          pointInfo={data.po_end_date}
        />
        <KeyPointInformation
          className="me-5"
          icon={Chart}
          pointNam="PO Number:"
          pointInfo={data.po_number}
        />
      </div>
      <Card className="container mt-5">
        <CardTitle titleName="Company Name: " titleInfo="Xyz Private Limited" />
        <hr />
        <div className="row">
          <KeyPointInformation
            className="col-6 my-3"
            icon={Calendar}
            pointNam="PO Title:"
            pointInfo={data.po_title}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={Wallet}
            pointNam="Payment Method:"
            pointInfo={data.payment_method}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={Calendar}
            pointNam="PO Start Date:"
            pointInfo={data.po_start_date}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={Location}
            pointNam="Delivery Place:"
            pointInfo={data.delicery_place}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={Calendar}
            pointNam="PO End Date:"
            pointInfo={data.po_end_date}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={Wallet}
            pointNam="Payment Grace Period:"
            pointInfo={data.payment_grace_period}
          />
          <KeyPointInformation
            className="col-6 my-3"
            icon={TimeCircle}
            pointNam="Rest Days For PO Expiry:"
            pointInfo={data.po_expires_in}
          />
        </div>
      </Card>
      <PurchaseOrderTable tableData={data.po_items}></PurchaseOrderTable>
    </div>
  );
};

export default PurchaseOrder;
