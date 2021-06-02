import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listUsersMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "First Name",
      dataField: "firstName",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Last Name",
      dataField: "lastName",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "PS No",
      dataField: "userName",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Email",
      dataField: "email",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Actions",
      sortable: true,
      formatter: (cell,row) => {
        return (
          <>
            {
              <IconButton
                iconname="faEdit"
                onClick={() => handleEdit(row.id)}
              />
            }
          </>
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
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        mobileNo: user.mobileNo,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
