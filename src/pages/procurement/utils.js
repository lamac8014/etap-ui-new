import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const siteDispatchMetaData = (handleUpdate) => {
  return [
    // {
    //   name: "MR Number",
    //   selector: "mrNo",
    //   sortable: false,
    // },

    {
      text: "MR No",
      dataField: "mrNo",
    },
    {
      text: "DC No",
      dataField: "dispatchNo",
    },
    {
      text: "Structure",
      dataField: "structureName",
    },
    {
      text: "No. of Comp",
      dataField: "compNo",
    },
    {
      text: "Req By",
      dataField: "reqBy",
    },
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: false,
    // },
    {
      text: "Actions",
      center: true,
      formatter: (cell, row) => {
        return (
          <>
            <IconButton
              id={row.dispatchId}
              iconname="faEdit"
              onClick={() => handleUpdate(row.dispatchId)}
            />
            <IconButton
              id={row.dispatchId}
              iconname="faList"
              onClick={() => {}}
            />
          </>
        );
      },
    },
  ];
};

export const assignVendorTableMetaData = (handleDelete) => {
  return [
    {
      formatter: (cell, row) => {
        return (
          <>
            <IconButton
              iconname="faTimes"
              className={"table-delete-icon"}
              onClick={() => handleDelete(row.structureId)}
              size="lg"
              iconColor="red"
              noBg
            />
          </>
        );
      },
      style: { width: "1%" },
    },
    {
      text: "Structure Name",
      dataField: "structureName",
    },
    {
      text: "Vendor Name",
      dataField: "vendorName",
    },
  ];
};

export const outSourcingTableMetaData = (handleDelete) => {
  return [
    {
      formatter: (cell, row) => {
        return (
          <>
            <IconButton
              iconName="faTimes"
              className={"table-delete-icon"}
              onClick={() => handleDelete(row.structureId)}
            />
          </>
        );
      },
    },
    {
      text: "Structure Name",
      dataField: "structureName",
    },
    {
      text: "Vendor Name",
      dataField: "vendorName",
    },
    {
      text: "Monthly Rent",
      dataField: "monthlyRent",
    },
    {
      text: "Contract Years",
      dataField: "contractYears",
    },
    {
      text: "Planned Release Date",
      dataField: "plannedReleaseDate",
    },
    {
      text: "Actual Start Date",
      dataField: "actualStartDate",
    },
    {
      text: "Expected Release Date",
      dataField: "expectedReleaseDate",
    },
  ];
};

export const transformStructureListData = (structureListCode) => {
  let tempArr = [];
  structureListCode.map((item) => {
    tempArr.push({
      value: item.id,
      label: item.structureName,
    });
  });

  return tempArr;
};

export const transformVendorCodeListData = (vendorCodeList) => {
  let tempArr = [];
  vendorCodeList.map((item) => {
    tempArr.push({
      value: item.id,
      label: item.name,
    });
  });

  return tempArr;
};
