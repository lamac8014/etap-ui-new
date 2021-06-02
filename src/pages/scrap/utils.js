import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleViewMore, handleEdit) => {
  return [
    {
      text: "DC No",
      dataField: "dcNo",
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
      dataField: "numberOfComponents",
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
                onClick={() => handleEdit(row.dispStructId)}
              />
              <IconButton
                compKey={row.userId}
                iconname="faList"
                size="1x"
                onClick={() => handleViewMore(row.dispStructId)}
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
    },
    {
      text: "Struct. Code",
      dataField: "structureCode",
    },
    {
      text: "Struct. Type",
      dataField: "structureTypeName",
    },
    {
      text: "Project",
      dataField: "fromProjectName",
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
