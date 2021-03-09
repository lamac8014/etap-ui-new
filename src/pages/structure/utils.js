import React from "react";
import IconButton from "../../common/forms/IconButton";
import { getSelectedValue } from "../../utils/dataTransformer";

export const listStructureMetaData = (handleDelete, handleEdit) => {
  return [
    {
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                iconname="faTimes"
                className={"table-delete-icon"}
                onClick={() => handleDelete(row.id)}
              />
            }
          </>
        );
      },
    },
    {
      text: "Structure Name",
      dataField: "structureName",
      sortable: true,
    },
    {
      text: "Structure Family",
      dataField: "structureType",
      sortable: true,
    },
    {
      text: "Actions",
      sortable: true,
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
