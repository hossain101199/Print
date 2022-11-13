import React from "react";
import Calendar from "../assets/logo/calendar.svg";
import Document from "../assets/logo/document.svg";
import Card from "./Card";
import KeyPointInformation from "./KeyPointInformation";
import CardTitle from "./CardTitle";
import StampCard from "./StampCard";
import PageHeader from "./PageHeader";
import OfferTable from "./OfferTable";
import Total from "./Total";

const data = {
  supplier_company_name: "XYZ",
  supplier_cr_number: "5353553",
  supplier_vat_registration_number: "68575757575",
  requester_company_name: "ABC",
  requester_cr_number: "12309898",
  requester_vat_registration_number: "123678900",
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
  ],
  grand_total: null,
};

const Offer = () => {
  return (
    <div>
      <PageHeader title="Offer"></PageHeader>
      <div className="container d-flex align-items-center">
        <KeyPointInformation
          className="me-5"
          icon={Calendar}
          pointNam="Offer Recieved Date:"
          pointInfo="July 30, 2021"
        />
        <KeyPointInformation
          className="me-5"
          icon={Document}
          pointNam="Offer Serial Number:"
          pointInfo="02157"
        />
      </div>
      <div className="d-flex justify-content-between container gap-3 mt-5 p-0">
        <Card className="w-100">
          <CardTitle titleName="FROM: " />
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
        <Card className="w-100">
          <CardTitle titleName="TO: " />
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
      </div>
      <OfferTable tableData={data.offer_items}></OfferTable>
      <div className="container d-flex justify-content-end p-0 mt-5">
        <Total grandTotal={data.grand_total}></Total>
      </div>
      <div className="container p-0 mt-5">
        <StampCard stamp="Seller Stamp"></StampCard>
      </div>
    </div>
  );
};

export default Offer;
