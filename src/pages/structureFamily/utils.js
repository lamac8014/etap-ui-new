import React from 'react';
import IconButton from "../../common/forms/IconButton";


export const structureFamilyMetaData = (handleEdit) => {
  return [

    {
      text: 'Structure Family',
      dataField: 'structureFamily',
    },
    {
      text: 'Status',
      dataField: 'status',

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

export const structureFamilyBodyData = structureFamilyList => {
  let tmpArr = [];
  let statusValue;
  structureFamilyList &&
    structureFamilyList.map(structureFamily => {
      if (structureFamily.isActive) {
        statusValue = "Active"
      }
      else {
        statusValue = "InActive"
      }
      let tmpObj = {
        id: structureFamily.id,
        structureFamilyType: structureFamily.name,
        status: statusValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
