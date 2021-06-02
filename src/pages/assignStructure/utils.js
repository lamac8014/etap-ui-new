import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const getComponentTableData = (scr) => {
  let tmpArr = [];
  let data = scr.uploadData;
  data &&
    data.map((data) => {
      tmpArr.push({
        compType: data.compTypeName,
        component: data.componentName,
        group: data.isGroup.toString(),
        compId: data.compId,
        compNum: data.componentNo,
        drawingNum: data.drawingNo,
        length: data.leng,
        breadth: data.breath,
        height: data.height,
        thickness: data.thickness,
        weight: data.weight,
        type: data.makeType,
        tag: data.isTag,
      });
    });
  return tmpArr;
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
  ];
  return headers;
};

export const getExcelData = (scr) => {
  let data = scr.uploadData;
  let dataArr = [];
  dataArr.push(getAssignExcelHeaders());
  if (data && data.length > 0) {
    data.map((dt, i) => {
      let tmpArr = [];
      tmpArr.push(dt.componentName);
      tmpArr.push(dt.compTypeName);
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
      dataArr.push(tmpArr);
    });
  } else {
    let tmpArr = [];
    tmpArr.push(scr.ic);
    tmpArr.push(scr.bu);
    tmpArr.push(scr.projName.label);
    tmpArr.push(scr.strcutureType);
    tmpArr.push(scr.structName.label);
    tmpArr.push(scr.structName.value);
    dataArr.push(tmpArr);
  }
  return dataArr;
};

export const transformAttri = (data, getByProjStrId = false) => {
  let tmpArr = [];
  while (typeof data === "string") {
    data = JSON.parse(data);
    console.log(`typeof data is ${typeof data}`);
  }
  data &&
    data.map((dt, index) => {
      tmpArr.push({
        id: index + 1,
        name: dt.name,
        uom: dt.uom,
        value: getByProjStrId ? dt.value : 0,
        typeOfInput: dt.typeOfInput,
      });
    });
  return tmpArr;
};

export const transformDocs = (data) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      tmpArr.push({
        id: dt.id,
        name: dt.fileName,
        filepath: dt.filepath,
      });
    });
  return tmpArr;
};

export const structAttriMetaData = (onChangeValue) => {
  return [
    {
      name: "Description",
      dataField: "name",
      style: {verticalAlign:"middle"},
			sort: true,
    },
    {
      name: "UoM",
      dataField: "uom",
      style: {verticalAlign:"middle"},
    },
    {
      name: "Value",
      dataField: "value",
      style: {verticalAlign:"middle"},
      sortable: false,
      cell: (row) => {
        console.log("in meta", row.id, row.value);
        return (
          <input
            type="text"
            value={row.value}
            onChange={(e) => onChangeValue(e, row.id)}
          />
        );
      },
    },
  ];
};

export const componentsMetaData = (onChangeValue) => {
  return [
    {
      text: "Component",
      dataField: "component",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Component Type",
      dataField: "compType",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Component ID",
      dataField: "compId",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Component No",
      dataField: "compNum",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Group",
      dataField: "group",
      style: {verticalAlign:"middle"},
    },

    {
      text: "Drawing No",
      dataField: "drawingNum",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Length",
      dataField: "length",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Breadth",
      dataField: "breadth",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Height",
      dataField: "height",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Thickness",
      dataField: "thickness",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Weight",
      dataField: "weight",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Type",
      dataField: "type",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Tag",
      dataField: "tag",
      style: {verticalAlign:"middle"},
    },
  ];
};

export const _componentInputData = [
  "IC",
  "BU",
  "Project",
  "Structure Family",
  "Structure",
  "Structure ID",
  "Component Type",
  "Component",
  "Component ID",
  "Group",
  "Component No",
  "Drawing No",
  "Length",
  "Breadth",
  "Height",
  "Thickness",
  "Weight",
  "Type",
  "Tag",
];
export const _componentInputBodyData = [
  {
    ic: "Auto",
    bu: "Auto",
    project: "Auto",
    structureFamily: "Auto",
    structure: "Auto",
    structureId: "LG-ABC",
    componentType: "",
    component: "",
    componentId: "Auto",
    group: "",
    componentNumber: "Auto",
    drawingNumber: "",
    length: "",
    breadth: "",
    height: "",
    thickness: "",
    weight: "",
    type: "",
    tag: "",
  },
];
export const _assignStructureInputData = [
  "S.no",
  "Description",
  "Type of Input",
  "UoM",
];
export const _assignStructureBodyData = [
  {
    sno: "",
    description: "",
    typeOfInput: "",
    uom: "",
  },
  {
    sno: "",
    description: "",
    typeOfInput: "",
    uom: "",
  },
];

export const listAssignedStructureMetaData = (
  handleComponentCheck,
  handleMore
) => {
  return [
    {
      text: "Structure Name",
      dataField: "structureName",
      style: {verticalAlign:"middle"},
    },

    {
      text: "Structure Code",
      dataField: "structureCode",
      style: {verticalAlign:"middle"},
      formatter: (cell, row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleComponentCheck(
                    row.structureId,
                    row.projectID,
                    row.projectStructureId
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
      style: {verticalAlign:"middle"},
    },

    {
      text: "Est. Weight",
      dataField: "estimatedWeight",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Dr. No",
      dataField: "drawingNo",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Status",
      dataField: "currentStatus",
      style: {verticalAlign:"middle"},
    },

    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                iconname="faEdit"
                onClick={() => handleMore(row.id)}
              />
            }
          </>
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
        projectStructureId: assignStructure.projectStructureId,
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

export const listAssignedComponentMetaData = (handleDelete, handleMore) => {
  return [
    {
      text: "Comp No",
      dataField: "componentNo",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Comp",
      dataField: "component",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Comp Code",
      dataField: "componentID",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Comp Type",
      dataField: "componentFamily",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Tot. Weight",
      dataField: "totalWeight",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Dr. No",
      dataField: "drawingNumber",
      style: {verticalAlign:"middle"},
    },
    {
      text: "M/O",
      dataField: "oM",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Mod No",
      dataField: "modNo",
      style: {verticalAlign:"middle"},
    },
    {
      text: "Actions",
      style: {verticalAlign:"middle"},
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                compKey={row.userId}
                iconname="faEdit"
                size="1x"
                onClick={() => handleMore(row.id)}
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

export const assignedCompPieChartData = (chartData) => {
  let data = {
    labels: ["Assigned", "Total"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#F15850", "#EDE03E"],
        hoverBackgroundColor: ["#F15850", "#EDE03E"],
      },
    ],
  };
  let chartDataItems = chartData.length > 0 ? chartData[0] : {};
  data.datasets[0].data[0] = chartDataItems.assignedCount
    ? chartDataItems.assignedCount
    : 0;
  data.datasets[0].data[1] = chartDataItems.totalCount
    ? chartDataItems.totalCount
    : 0;

  return data;
};

export const scannedCompPieChartData = (chartData) => {
  let data = {
    labels: ["Scanned", "Dispatched"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#F15850", "#EDE03E"],
        hoverBackgroundColor: ["#F15850", "#EDE03E"],
      },
    ],
  };
  let chartDataItems = chartData.length > 0 ? chartData[0] : {};
  if (chartDataItems.scannedCount !== 0) {
    data.datasets[0].data[0] = chartDataItems.scannedCount;
  }
  if (chartDataItems.dispatchCount !== 0) {
    data.datasets[0].data[1] = chartDataItems.dispatchCount;
  }

  return data;
};
