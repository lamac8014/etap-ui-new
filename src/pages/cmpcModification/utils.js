import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const componentsMetaData = (onChangeValue) => {
  return [
    {
      text: "Component",
      dataField: "component",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component Type",
      dataField: "compType",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component ID",
      dataField: "compId",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component No",
      dataField: "compNum",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Group",
      dataField: "group",
      style: { verticalAlign: "middle" },
    },

    {
      text: "Drawing No",
      dataField: "drawingNum",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Length",
      dataField: "length",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Breadth",
      dataField: "breadth",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Height",
      dataField: "height",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Thickness",
      dataField: "thickness",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Weight",
      dataField: "weight",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Type",
      dataField: "type",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Tag",
      dataField: "tag",
      style: { verticalAlign: "middle" },
    },
  ];
};

export const structureMetaData = (handleComponentCheck, handleViewMore) => {
  return [
    {
      text: "DC No",
      dataField: "dcNumber",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Structure Name",
      dataField: "structrueName",
      style: { verticalAlign: "middle" },
    },

    {
      text: "Structure Code",
      dataField: "structureCode",
      style: { verticalAlign: "middle" },
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
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => {
        return (
          <p className="m-0">
            {row.currentComponentsCount}/{row.requiredComponenentCount}
          </p>
        );
      },
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

export const getComponentTableData = (scr) => {
	let tmpArr = [];
	let data = scr.uploadData;
	data &&
		data.map((data) => {
      data.isGroup = data.isGroup.toString().toLowerCase() === "true" || data.isGroup.toString().toLowerCase() === "yes" ? "Yes" : "No"
      data.isTag= data.isTag.toString().toLowerCase() === "true" || data.isTag.toString().toLowerCase() === "yes" ? "Yes" : "No"
		});
	return data;
};

export const componentMetaData = (handleMore) => {
  return [
    {
      text: "Component",
      dataField: "componentName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component Type",
      dataField: "componentType",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Comp ID",
      dataField: "compId",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Comp No",
      dataField: "componentNo",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Group",
      dataField: "isGroup",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Dr. No",
      dataField: "drawingNo",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Length",
      dataField: "leng",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Breadth",
      dataField: "breath",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Height",
      dataField: "height",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Thickness",
      dataField: "thickness",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Weight",
      dataField: "weight",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Type",
      dataField: "makeType",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Tag",
      dataField: "isTag",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Modified(Y/N)",
      dataField: "isModified",
      // style: { verticalAlign: "middle" },
      // formatter: (cell, row) => {
      //   return (
      //     <>
      //       {
      //         <IconButton
      //           compKey={row.userId}
      //           iconname="faEdit"
      //           size="1x"
      //           onClick={() => handleMore(row.compId)}
      //         />
      //       }
      //     </>
      //   );
      // },
    },
  ];
};

export const transformAssignedComponentList = (assignComponentList) => {
  // console.log("+++++++++");
  // console.log(assignComponentList);
  // console.log("+++++++++");
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
export const getAssignExcelHeaders = () => {
  const headers = [
    "Component",
    "Component Type",
    "Component ID",
    "Component No",
    "Group",
    "Drawing Number",
    "Length",
    "Breadth",
    "Height",
    "Thickness",
    "Weight",
    "Type",
    "Tag",
    "Modified",
  ];
  return headers;
};
export const getExcelData = (cmpc) => {
  let data = cmpc.componentData;
  let dataArr = [];
  dataArr.push(getAssignExcelHeaders());
  if (data && data.length > 0) {
    data.map((dt, i) => {
      let tmpArr = [];
      tmpArr.push(dt.componentName);
      tmpArr.push(dt.componentType);
      tmpArr.push(dt.compId);
      tmpArr.push(dt.componentNo);
      tmpArr.push(dt.isGroup);
      tmpArr.push(dt.drawingNo);
      tmpArr.push(dt.leng);
      tmpArr.push(dt.breath);
      tmpArr.push(dt.height);
      tmpArr.push(dt.thickness);
      tmpArr.push(dt.weight);
      tmpArr.push(dt.makeType);
      tmpArr.push(dt.isTag);
      tmpArr.push(dt.isModified);
      dataArr.push(tmpArr);
    });
  } else {
    let tmpArr = [];
    dataArr.push(tmpArr);
  }
  return dataArr;
};
