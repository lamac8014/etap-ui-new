import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (
 
  handleMore,handleApprove,handleReject
) => {
  return [
    {
      text: "Mr No",
      dataField: "mrNo",
      sortable: true,
    },

    {
      text: "Project",
      dataField: "projectName",
      sortable: true,
    },

    {
      text: "Structure Id",
      dataField: "projectId",
      sortable: true,
    },
    {
      text: "Structure Family",
      dataField: "structureName",
      sortable: true,
    },
    {
      text: "Quantity",
      dataField: "projectId",
      sortable: true,
    },
    {
      text: "Required By",
      dataField: "projectId",
      sortable: true,
    },
    {
      text: "status",
      dataField: "status",
      sortable: true,
    },

    {
      text: "Actions",
      dataField: true,
      formatter: (cell, row) => {
        return (
          <>
           
            {<IconButton iconname="faEye" onClick={() => handleMore(row.id)} />}
            {<IconButton iconname="faThumbsUp" onClick={() => handleApprove(row.id)} />}
            {<IconButton iconname="faThumbsDown" onClick={() => handleReject(row.id)} />}
          </>
        );
      },
    },
  ];
};