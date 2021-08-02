import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listFabCostData = (
  handleAddCost,
  redirectToFabCostMoreDetails
) => {
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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                redirectToFabCostMoreDetails(
                  row.projectStructureId,
                  row.dispatchNo,
                  row.structrueName,
                  row.structureCode
                );
              }}
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
              onClick={() => handleAddCost(row.projectStructureId)}
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
      dataField: "componentName",
      style: { verticalAlign: "middle" },
    },

    {
      text: " Component weight",
      dataField: "weight",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Cost",
      dataField: "fabriacationCost",
      style: { verticalAlign: "middle" },
    },
  ];
};
