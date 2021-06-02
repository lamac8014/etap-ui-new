import React from "react";
import IconButton from "../../common/forms/IconButton";
import { getSelectedValue } from "../../utils/dataTransformer";

export const listStructureMetaData = (handleDelete, handleEdit) => {
  return [
    // {
    //   formatter: (cell, row) => {
    //     return (
    //       <>
    //         {
    //           <IconButton
    //             iconname="faTimes"
    //             className={"table-delete-icon"}
    //             onClick={() => handleDelete(row.id)}
    //           />
    //         }
    //       </>
    //     );
    //   },
    //   headerStyle: (col, colIndex) => {
    //     return { width: "2%" };
    //   },
    // },
    {
      text: "Structure Name",
      dataField: "structureName",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Structure Family",
      dataField: "structureType",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Status",
      dataField: "status",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
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

export const transformStructureList = (structureList, structureFamilyList) => {
  let tmpArr = [];
  let isActiveValue;
  structureList &&
    structureList.map((structure) => {
      if (structure.isActive) {
        isActiveValue = "Active";
      } else {
        isActiveValue = "inActive";
      }

      const structureFamilyValue = getSelectedValue(
        structureFamilyList,
        structure.structureTypeId
      );
      let tmpObj = {
        id: structure.id,
        structureName: structure.name,
        structureType: structureFamilyValue.label,
        status: isActiveValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
