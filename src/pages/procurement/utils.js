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
      text: "DC Number",
      dataField: "dispatchNo",
      
    },
    {
      text: "Structure Name",
      dataField: "structureName",
      
    },
    {
      text: "Structure Code",
      dataField: "structId",
      
    },
    {
      text: "No. of Components",
      dataField: "structId",
      
    },
    {
      text: "Requested By",
      dataField: "structId",
      
    },
    {
      text: "Quantity Requested",
      dataField: "structId",
      
    },
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: false,
    // },
    {
      text: "Actions",
      center: true,
      formatter: (cell,row) => {
        return (
          <div className="row">
            <div className="col-md-5">
              <IconButton
                id={row.dispatchId}
                iconName="faEdit"
                onClick={() => handleUpdate(row.dispatchId)}
              />
            </div>
            <div className="col-md-5">
              {/* <Button btnText="View More" btnType="btn-primary btn-sm" /> */}
              <IconButton
                id={row.dispatchId}
                iconName="faList"
                onClick={() => {}}
              />
            </div>
          </div>
        );
      },
    },
  ];
};

export const fabricationTableMetaData = (handleDelete) => {
  return [
    {
      
      formatter: (cell,row) => {
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
      text: "Fabrication cost",
      dataField: "fabricationCost",
      
    },
  ];
};

export const outSourcingTableMetaData = (handleDelete) => {
  return [
    {
      
      formatter: (cell,row) => {
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
