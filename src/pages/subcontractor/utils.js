import React from "react";
import IconButton from "../../common/forms/IconButton";

export const tranformServTypeList = (data) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      dt.checked = false;
      tmpArr.push(dt);
    });
  return tmpArr;
};
export const tranformServTypeListEnableCheck = (data) => {
  let tmpArr = [];
  let defaultData = [
    {
      name: "Fabrication",
      id: 1,
      style: { verticalAlign:"middle"},
      checked: false,
    },
    {
      name: "Outsourcing",
      id: 2,
      style: { verticalAlign:"middle"},
      checked: false,
    },
    {
      name: "Scrap",
      id: 3,
      style: { verticalAlign:"middle"},
      checked: false,
    },
  ];

  data &&
    data.map((dt, i) => {
      defaultData.map((dtt) => {
        if (dt.serviceTypeId === dtt.id) {
          dtt.checked = true;
          dtt.vendorId = dt.vendorId;
          dtt.serviceTypeId = dt.serviceTypeId;
          dtt.serviceId = dt.id;
        }
      });
      tmpArr.push(dt);
    });
  console.log(`Changed Data Array: ${JSON.stringify(defaultData)}`);
  return defaultData;
};

export const listVendorMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "Vendor Name",
      dataField: "name",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Vendor Email",
      dataField: "email",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Vendor Code",
      dataField: "vendorCode",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Phone Number",
      dataField: "phoneNunmber",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Status",
      dataField: "isStatus",
      style: { verticalAlign:"middle"},
      formatter: (cell, row) => {
        return <>{row.isStatus ? "Active" : "InActive"}</>;
      },
    },
    {
      text: "Actions",
      sortable: true,
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                iconname="faEdit"
                onClick={() => handleEdit(row.id)}
              />
            }
          </>
        );
      },
    },
  ];
};

export const transformVendorList = (vendorList) => {
  let tmpArr = [];
  let statusValue;

  vendorList &&
    vendorList.map((vendor) => {
      if (vendor.isActive) {
        statusValue = "Active";
      } else {
        statusValue = "InActive";
      }

      let tmpObj = {
        sno: vendor.id,
        vendor: vendor.name,
        vendorCode: vendor.vendorCode,

        status: statusValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
