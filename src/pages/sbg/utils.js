import React from "react";
import IconButton from "../../common/forms/IconButton";

export const sbgTableMetaData = (handleEdit) => {
  return [
    {
      text: "Strategic Business Group Name",
      dataField: "name",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Status",
      dataField: "status",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Actions",
      dataField: true,
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

export const transformSbgData = (sbgData) => {
  let tmpArr = [];
  sbgData &&
    sbgData.map((item) => {
      let tmpObj = {
        ...item,
        status: item.isActive ? "Active" : "InActive",
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
