import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listUsersMetaData = (handleDelete, handleEdit) => {
    return [
   
      {
        name: 'First Name',
        selector: 'firstName',
        sortable: true,
      },
      {
        name: 'Last Name',
        selector: 'lastName',
        sortable: true,
      },
      {
        name: 'PS No',
        selector: 'userName',
        sortable: true,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: true,
      },      
      {
        name: 'Actions',
        sortable: true,
        cell: row => {
          return (
            <>
              {(
                <IconButton
                  iconName="faEdit"
                  onClick={() => handleEdit(row.id)}
                />
              )}
            </>
          );
        },
      },
    ];
  };

  export const transformUsersList = usersList => {
    let tmpArr = [];
    usersList &&
    usersList.map(user => {
        
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




