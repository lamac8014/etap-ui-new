import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const componentsMetaData = (onChangeValue) => {
  return [
    {
      text: "Component",
      dataField: "component",
    },
    {
      text: "Component Type",
      dataField: "compType",
    },
    {
      text: "Component ID",
      dataField: "compId",
    },
    {
      text: "Component No",
      dataField: "compNum",
    },
    {
      text: "Group",
      dataField: "group",
    },

    {
      text: "Drawing No",
      dataField: "drawingNum",
    },
    {
      text: "Length",
      dataField: "length",
    },
    {
      text: "Breadth",
      dataField: "breadth",
    },
    {
      text: "Height",
      dataField: "height",
    },
    {
      text: "Thickness",
      dataField: "thickness",
    },
    {
      text: "Weight",
      dataField: "weight",
    },
    {
      text: "Type",
      dataField: "type",
    },
    {
      text: "Tag",
      dataField: "tag",
    },
  ];
};

export const structureMetaData = (handleComponentCheck, handleViewMore) => {
  return [
    {
      text: "DC No",
      dataField: "dcNumber",
    },
    {
      text: "Structure Name",
      dataField: "structrueName",
    },

    {
      text: "Structure Code",
      dataField: "structureCode",
      formatter: (cell, row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleComponentCheck(
                    row.dispStructureId,
                    row.dispatchRequirementId,
                    row.projectStructureId,
                    row.structrueName,
                    row.structureCode,
                    row.projectName,
                    row.dcNumber
                  );
                }}
              >
                {row.structureCode}
              </a>
            }
          </>
        );
      },
    },

    {
      text: "No of Comp",
      dataField: "componentsCount",
    },

    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <IconButton
            iconname="faList"
            onClick={() => {
              handleViewMore(row.dispStructureId);
            }}
          />
        );
      },
    },
  ];
};

export const transformAssignedStructureList = (assignStructureList) => {
  let tmpArr = [];
  assignStructureList &&
    assignStructureList.map((assignStructure, i) => {
      let tmpObj = {
        estimatedWeight: assignStructure.estimatedWeight,
        drawingNo: assignStructure.drawingNo,
        projectID: assignStructure.projectId,
        structureName: assignStructure.strcutureName,
        structureId: assignStructure.structureId,
        structureCode: assignStructure.structureCode,
        structureFamily: assignStructure.strcutureTypeName,
        totalWeight: assignStructure.totalWeight,
        componentsCount: assignStructure.componentsCount,
        structureStatus: assignStructure.status,
        currentStatus: assignStructure.currentStatus,
        id: i,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const componentMetaData = (handleMore) => {
  return [
    {
      text: "Component",
      dataField: "componentName",
    },
    {
      text: "Component Type",
      dataField: "componentType",
    },
    {
      text: "Comp ID",
      dataField: "compId",
    },
    {
      text: "Comp No",
      dataField: "componentNo",
    },
    {
      text: "Group",
      dataField: "isGroup",
    },
    {
      text: "Dr. No",
      dataField: "drawingNo",
    },
    {
      text: "Length",
      dataField: "leng",
    },
    {
      text: "Breadth",
      dataField: "breath",
    },
    {
      text: "Height",
      dataField: "height",
    },
    {
      text: "Thickness",
      dataField: "thickness",
    },
    {
      text: "Weight",
      dataField: "weight",
    },
    {
      text: "Type",
      dataField: "makeType",
    },
    {
      text: "Tag",
      dataField: "isTag",
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                compKey={row.userId}
                iconname="faEdit"
                size="1x"
                onClick={() => handleMore(row.compId)}
              />
            }
          </>
        );
      },
    },
  ];
};

export const transformAssignedComponentList = (assignComponentList) => {
  console.log("+++++++++");
  console.log(assignComponentList);
  console.log("+++++++++");
  let tmpArr = [];
  assignComponentList &&
    assignComponentList.map((assignComponent, i) => {
      let tmpObj = {
        componentNo: assignComponent.componentNo,
        component: assignComponent.componentName,
        componentID: assignComponent.compId,
        componentFamily: assignComponent.compTypeName,
        drawingNumber: assignComponent.drawingNo,
        oM: assignComponent.compStatus,
        modNo: assignComponent.compStatus,
        id: i,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const CSVLoaderStyles = {
  dropArea: {
    border: "none",
    padding: 0,
  },
};
