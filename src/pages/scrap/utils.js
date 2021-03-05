import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "DC No",
      dataField: "dcNo",
    },
    {
      text: "Struct. Name",
      dataField: "structureName",
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
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <div key={row.userId}>
            <IconButton
              compKey={row.userId}
              iconname="faEdit"
              size="1x"
              onClick={() => handleEdit(row.id)}
            />
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
