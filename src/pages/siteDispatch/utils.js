import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";

export const siteDispatchMetaDatatext =(handleUpdate) => {
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
    // {
    //   name: "Created Date",
    //   selector: "createdDateTime",
    //   sortable: false,
    // },
    {
      text: "Structure Code",
      dataField: "structId",
    
    },
    {
      text: "Structure Name",
      dataField: "structureName",
    
    },
    {
      text: "Qty Assigned",
      dataField: "createdDateTime",
    
    },
    {
      text: "Actions",
      center: true,
    
      formatter: (cell,row) => {
        return (
          <div className="row">
            <div className="col-md-5">
              <IconButton
                id={row.dispatchId}
                iconname="faEdit"
                onClick={() => handleUpdate(row.dispatchId)}
              />
            </div>
            <div className="col-md-5">
              {/* <Button btnText="View More" btnType="btn-primary btn-sm" /> */}
              <IconButton
                id={row.dispatchId}
                iconname="faList"
                onClick={() => { }}
              />
            </div>
          </div>
        );
      },
    },
  ];
};
