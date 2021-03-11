import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";
import { getUserDetails } from "../../utils/auth";

export const _viewRequirementsInputData = ["Project", "Structure Family", "Structure ID", "Drawing No", "Quantity", "Required By", "Required for WBS", "Planned Start Date", "Planned Release Date", "Actual Start Date", "Actual WBS", "Expected Release Date", "Remarks", "MR No","BU","TWCC"];
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
export const _siteViewRequirementsInputData = ["Project", "Structure Family", "Structure ID", "Drawing No", "Quantity", "Required By", "Required for WBS", "Planned Start Date", "Planned Release Date", "Actual Start Date", "Actual WBS", "Expected Release Date", "Remarks", "MR No", "Status","Action"];
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
    handleApprove,
    handleReject,
    handleMore
  ) => {
    return [
      {
        name: "MR Number",
        selector: "mrNo",
        sortable: true,
      },
      {
        name: "Project",
        selector: "project",
        sortable: true,
      },
      {
        name: "Structure Name",
        selector: "structureName",
        sortable: true,
      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
      },
      {
        name: "Action",
        sortable: true,
        cell: (row) => {
          if(row.isAction == "1"){
            return (
              <>
                {
                  <IconButton
                    iconName="faThumbsUp"
                    onClick={() => handleApprove(row.id)}
                  />
                  
                }
                {
                    <IconButton
                    iconName="faThumbsDown"
                    onClick={() => handleReject(row.id)}
                  />
                }
                {
                    <IconButton
                    iconName="faEdit"
                    onClick={() => handleMore(row.id)}
                  />
                }
              </>
            );
          } else {
            return (
              <>
                {
                    <IconButton
                    iconName="faEdit"
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
            isAction: requirement.isAction
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };

  export const transformProjectValue = () => {
    const userDetails = getUserDetails();
    return userDetails.projectName
  };