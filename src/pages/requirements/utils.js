import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";
import { getUserDetails } from "../../utils/auth";

export const _viewRequirementsInputData = [
  "Project",
  "Structure Family",
  "Structure ID",
  "Drawing No",
  "Quantity",
  "Required By",
  "Required for WBS",
  "Planned Start Date",
  "Planned Release Date",
  "Actual Start Date",
  "Actual WBS",
  "Expected Release Date",
  "Remarks",
  "MR No",
  "BU",
  "TWCC",
];
export const _viewRequirementsInputBodyData = [
  {
    project: "",
    structureFamily: "",
    structureId: "",
    drawingNumber: "",
    quantity: "",
    requiredBy: "",
    requiredFor: "",
    plannedStartedDate: "",
    plannedReleaseDate: "",
    actualStartDate: "",
    actualWorkBreak: "",
    expectedReleaseDate: "",
    remarks: "",
    mrNumber: "",
    bu: "Approved",
    twcc: "Approved",
  },
];
export const _siteViewRequirementsInputData = [
  "Project",
  "Structure Family",
  "Structure ID",
  "Drawing No",
  "Quantity",
  "Required By",
  "Required for WBS",
  "Planned Start Date",
  "Planned Release Date",
  "Actual Start Date",
  "Actual WBS",
  "Expected Release Date",
  "Remarks",
  "MR No",
  "Status",
  "Action",
];
export const _siteViewRequirementsInputBodyData = [
  {
    project: "",
    structureFamily: "",
    structureId: "",
    drawingNumber: "",
    quantity: "",
    requiredBy: "",
    requiredFor: "",
    plannedStartedDate: "",
    plannedReleaseDate: "",
    actualStartDate: "",
    actualWorkBreak: "",
    expectedReleaseDate: "",
    remarks: "",
    mrNumber: "",
    status: "",
  },
];

export const listViewRequirementsMetaData = (
  handleMore,
  handleApprove,
  handleReject
) => {
  return [
    {
      text: "Mr No",
      dataField: "mrNo",
    },

    {
      text: "Project",
      dataField: "projectName",
    },

    {
      text: "Structure Id",
      dataField: "projectId",
    },
    {
      text: "Structure Family",
      dataField: "structureName",
    },
    {
      text: "Quantity",
      dataField: "projectId",
    },
    {
      text: "Required By",
      dataField: "projectId",
    },
    {
      text: "status",
      dataField: "status",
    },

    {
      text: "Action",
      formatter: (cell, row) => {
        if (row.isAction == "1") {
          return (
            <>
              <IconButton
                iconname="faEdit"
                onClick={() => handleMore(row.id)}
              />

              <IconButton
                iconname="faThumbsUp"
                onClick={() => handleApprove(row.id)}
              />

              <IconButton
                iconname="faThumbsDown"
                onClick={() => handleReject(row.id)}
              />
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

export const transformViewRequirementList = (requirementsList) => {
  let tmpArr = [];
  requirementsList &&
    requirementsList.map((requirement, i) => {
      let tmpObj = {
        mrNo: requirement.mrNo,
        project: requirement.projectName,
        structureName: requirement.structureName,
        status: requirement.status,
        id: i,
        isAction: requirement.isAction,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const transformProjectValue = () => {
  const userDetails = getUserDetails();
  return userDetails.projectName;
};

export const requestCreationMetaData = (handleViewMore) => {
  return [
    {
      text: "Structure Name",
      dataField: "structName",
    },
    {
      text: "Quantity",
      dataField: "quantity",
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <IconButton
            iconname="faList"
            onClick={() => {
              handleViewMore(row.id);
            }}
            rounded
          />
        );
      },
    },
  ];
};
