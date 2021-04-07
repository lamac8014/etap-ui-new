import React from "react";
import Checkbox from "../../common/forms/Checkbox";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";

export const listUsersMetaData = (setSelectedStructures, handleViewMore) => {
  return [
    {
      text: "",
      dataField: "",
      formatter: (cell, row) => {
        return (
          <Input
            key={row.dispatchRequirementId}
            type="checkbox"
            style={{ marginLeft: 0 }}
            //  disabled={row.disabled}
            checked={row.checked}
            onChange={() => setSelectedStructures(row)}
          />
        );
      },
    },
    {
      text: "DA No",
      dataField: "dcNo",
    },
    {
      text: "Struct. Name",
      dataField: "structrueName",
    },
    {
      text: "Struct. Code",
      dataField: "structureCode",
    },
    {
      text: "No of Components",
      dataField: "numberOfComponents",
    },
    {
      text: "Required By",
      dataField: "projectName",
    },
    {
      text: "Quantity",
      dataField: "quantity",
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div key={row.userId}>
            <>
              <IconButton
                compKey={row.userId}
                iconname="faList"
                size="1x"
                onClick={() => handleViewMore(row.id)}
              />
            </>
          </div>
        );
      },
    },
  ];
};

export const addIdToData = (data) => {
  let tmpArr = [];
  data &&
    data.map((item, index) => {
      let tmpObj = {
        id: item[index],
        checked: false,
        ...item,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
