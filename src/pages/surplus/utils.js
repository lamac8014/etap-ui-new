import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleViewMore, handleEdit) => {
  return [
    {
      text: "DC/DA No",
      dataField: "dispatchNumber",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Struct. Name",
      dataField: "structureName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Struct. Code",
      dataField: "projectStructureCode",
      style: { verticalAlign: "middle" },
    },
    {
      text: "No of Components",
      dataField: "componentsCount",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div key={row.userId}>
            <>
              <IconButton
                iconname="faEdit"
                size="1x"
                onClick={() => handleEdit(row.dispatchRequirementId)}
              />
              <IconButton
                iconname="faList"
                size="1x"
                onClick={() => handleViewMore(row.dispatchRequirementId)}
              />
            </>
          </div>
        );
      },
    },
  ];
};

export const surplusApproveMetaData = (
  handleApprove,
  handleReject,
  handleView,
  handleViewMore
) => {
  return [
    {
      text: "Struct. Name",
      dataField: "structureName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Struct. Code",
      dataField: "structureCode",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Struct. Type",
      dataField: "structureTypeName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Project",
      dataField: "projectName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Surplus From",
      dataField: "surplusDate",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        if (row.isAction == "1") {
          return (
            <>
              {
                <IconButton
                  type="success"
                  iconname="faThumbsUp"
                  onClick={() => handleApprove(row.id)}
                />
              }
              {
                <IconButton
                  type="danger"
                  iconname="faThumbsDown"
                  onClick={() => handleReject(row.id)}
                />
              }
              {
                <IconButton
                  iconname="faList"
                  onClick={() => handleView(row.id)}
                />
              }
            </>
          );
        } else {
          return (
            <>
              {
                <IconButton
                  iconname="faList"
                  onClick={() => handleViewMore(row.id)}
                />
              }
            </>
          );
        }
      },
    },
  ];
};

export const transformUsersList = (usersList) => {
  let tmpArr = [];
  usersList &&
    usersList.map((user) => {
      let tmpObj = {
        id: user.userId,
        userID: user.userId,
        firsttext: user.firstName,
        lasttext: user.lastName,
        usertext: user.userName,
        email: user.email,
        mobileNo: user.mobileNo,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
