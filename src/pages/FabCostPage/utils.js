import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listFabCostData = (handleAddCost) => {
  return [

    {
      text: "DC No",
      dataField: "dispatchNo",
      style: { verticalAlign: "middle" },
    },

    {
      text: "Structure Name",
      dataField: "structrueName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Structure Code",
      dataField: "structureCode",
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => {
        return (
          <>
            <a
              href="/etrack/fabCostPage/fabCostMore"
              target="_self"
            // onClick={() => {
            //   redirectToFabCostMoreDetails(row.structureCode);
            // }}
            >
              {row.structureCode}
            </a>
          </>
        );
      },
    },
    {
      text: "Actions",
      center: true,
      formatter: (cell, row) => {
        return (
          <div>
            <IconButton
              iconname="faList"
              // onClick={() => handleViewMore(true)}
              
            />

            <IconButton
              iconname="faEdit"
              onClick={() => handleAddCost(row.id)}
            />
          </div>
        );
      },
    },
  ];

};
export const listTableData = () => {
  return [
    {
      text: "Component",
      dataField: "compId",
      style: { verticalAlign: "middle" },
    },

    {
      text: " Component weight",
      dataField: "weight",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Cost",
      dataField: "cost",
      style: { verticalAlign: "middle" },
    },
  ]
}