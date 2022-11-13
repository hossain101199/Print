import React from "react";
import Calendar from "../assets/logo/calendar.svg";
import Chart from "../assets/logo/chart.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import Total from "./Total";
import StampCard from "./StampCard";
import PageHeader from "./PageHeader";
import OrderTable from "./OrderTable";

const data = {
  supplier_company_name: "Company2",
  supplier_cr_number: "45454",
  supplier_vat_registration_number: "44545",
  requester_company_name: "Company2",
  requester_cr_number: "45454",
  requester_vat_registration_number: "44545",
  offer_items: [
    {
      offer_approval_date: "30 13, 2022",
      offer_serial_number: 1,
      item_name: "Computer",
      item_description: "test",
      quantity: 10,
      unit_price: 12.0,
      total: 100.0,
    },
    {
      offer_approval_date: "30 13, 2022",
      offer_serial_number: 2,
      item_name: "Computer",
      item_description: "test",
      quantity: 10,
      unit_price: 11.0,
      total: 100.0,
    },
  ],
  grand_total: 222,
  payent_method: 1,
  delivery_loc: "string",
  delivery_duration: 0,
  purchaser_stamp:
    "http://127.0.0.1:8000/media/stamp_docs/jswal_api_vW9AgE6.PNG",
  purchaser_name: "zhf",
};

const Order = () => {
  return (
    <div>
      <PageHeader title="Order"></PageHeader>
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
      <div className="d-flex justify-content-between container gap-3 mt-5 p-0">
        <Card className="w-100">
          <CardTitle titleName="Requester Company Information" />
          <hr />
          <div className="">
            <KeyPointInformation
              className=" my-3"
              pointNam="Company Name:"
              pointInfo={data.requester_company_name}
            />
            <KeyPointInformation
              className=" my-3"
              pointNam="CR Number:"
              pointInfo={data.requester_cr_number}
            />
            <KeyPointInformation
              className=" my-3"
              pointNam="VAT Registration Number:"
              pointInfo={data.requester_vat_registration_number}
            />
          </div>
        </Card>
        <Card className="w-100">
          <CardTitle titleName="Supplier Company Information" />
          <hr />
          <div className="">
            <KeyPointInformation
              className=" my-3"
              pointNam="Company Name:"
              pointInfo={data.supplier_company_name}
            />
            <KeyPointInformation
              className=" my-3"
              pointNam="CR Number:"
              pointInfo={data.supplier_cr_number}
            />
            <KeyPointInformation
              className=" my-3"
              pointNam="VAT Registration Nmuber:"
              pointInfo={data.supplier_vat_registration_number}
            />
          </div>
        </Card>
      </div>
      <OrderTable tableData={data.offer_items}></OrderTable>
      <div className="container d-flex align-items-center justify-content-between p-0 mt-5">
        <div>
          <KeyPointInformation
            className=" my-3"
            pointNam="Payment Method:"
            pointInfo={data.payent_method}
          />
          <KeyPointInformation
            className=" my-3"
            pointNam="Delivery Location:"
            pointInfo={data.delivery_loc}
          />
          <KeyPointInformation
            className=" my-3"
            pointNam="Duration of Supply:"
            pointInfo={data.delivery_duration}
          />
        </div>
        <Total grandTotal={data.grand_total}></Total>
      </div>
      <div className="container p-0 mt-5">
        <StampCard
          stamp={data.purchaser_stamp}
          purchaserName={data.purchaser_name}
        ></StampCard>
      </div>
    </div>
  );
};

export default Order;
