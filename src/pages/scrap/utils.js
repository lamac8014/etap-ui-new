import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleViewMore, handleEdit) => {
  return [
    {
      text: "Project Name",
      dataField: "fromProjectName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Struct. Name",
      dataField: "structureName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Struct. Code",
      dataField: "structureCode",
      style: { verticalAlign:"middle"},
    },
    {
      text: "No of Components",
      dataField: "currentComponentsCount",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div key={row.userId}>
            <>
              <IconButton
                compKey={row.userId}
                iconname="faEdit"
                size="1x"
                onClick={() => handleEdit(row.id)}
              />
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

export const scrapApproveMetaData = (
  handleApprove,
  handleReject,
  handleViewMore
) => {
  return [
    {
      text: "Struct. Name",
      dataField: "structureName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Struct. Code",
      dataField: "structureCode",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Struct. Type",
      dataField: "structureTypeName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Project",
      dataField: "fromProjectName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Actions",
      style: { verticalAlign:"middle"},
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
                  onClick={() => handleViewMore(row.id)}
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
export const transformVendorCodeListData = (vendorCodeList) => {
  let tempArr = [];
  vendorCodeList.map((item) => {
    tempArr.push({
      value: item.id,
      label: item.name,
    });
  });

  return tempArr;
};
