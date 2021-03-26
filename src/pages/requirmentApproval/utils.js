import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (

  handleMore, handleApprove, handleReject
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
      text: "Action",
      sortable: true,
      formatter: (cell,row) => {
        if (row.isAction == "1") {
          return (
            <>
              {
                <IconButton
                  iconname="faEdit"
                  onClick={() => handleMore(row.id)}
                />
              }
              {
                <IconButton
                  iconname="faThumbsUp"
                  onClick={() => handleApprove(row.id)}
                />

              }
              {
                <IconButton
                  iconname="faThumbsDown"
                  onClick={() => handleReject(row.id)}
                />
              }

            </>
          );
        } else {
          return (
            <>
              {
                <IconButton
                  iconname="faEdit"
                  onClick={() => handleMore(row.id)}
                />
              }
            </>
          );
        }
      },
    },
  ];
};