import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Link } from "react-router";

export const getComponentTableData = (scr) => {
  let tmpArr = [];
  let data = scr.uploadData;
  data &&
    data.map((data) => {
      tmpArr.push({
        ic: scr.ic,
        bu: scr.bu,
        project: scr.projName.label,
        structFamily: scr.strcutureType,
        structure: scr.structName.label,
        structureId: scr.structName.value,
        compType: data.compTypeName,
        component: data.componentName,
        group: data.isGroup.toString(),
        compNum: data.compId,
        drawingNum: data.drawingNo,
        length: data.leng,
        breadth: data.breath,
        height: data.height,
        thickness: data.thickness,
        weight: data.width,
        type: data.makeType,
        tag: data.isTag,
      });
    });
  return tmpArr;
};

export const getAssignExcelHeaders = () => {
  const headers = [
    "IC",
    "BU",
    "Project",
    "Structure Family",
    "Structure Name",
    "Structure ID",
    "Component Type",
    "Component Name",
    "Component ID",
    "Belong To A Group",
    "Component Number",
    "Drawing Number",
    "Length",
    "Breadth",
    "Height",
    "Thickness",
    "Weight",
    "Type",
    "Tag",
    "Cost",
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
      tmpArr.push(scr.ic);
      tmpArr.push(scr.bu);
      tmpArr.push(scr.projName.label);
      tmpArr.push(scr.strcutureType);
      tmpArr.push(scr.structName.label);
      tmpArr.push(scr.structName.value);
      tmpArr.push(dt.compTypeName);
      tmpArr.push(dt.componentName);
      tmpArr.push(dt.compId);
      tmpArr.push(dt.isGroup);
      tmpArr.push(dt.componentNo);
      tmpArr.push(dt.drawingNo);
      tmpArr.push(dt.leng);
      tmpArr.push(dt.breadth);
      tmpArr.push(dt.height);
      tmpArr.push(dt.thickness);
      tmpArr.push(dt.weight);
      tmpArr.push(dt.makeType);
      tmpArr.push(dt.isTag);
      dataArr.push(tmpArr);
    });
  } else {
    let tmpArr = [];
    // tmpArr.push(scr.ic);
    // tmpArr.push(scr.bu);
    // tmpArr.push(scr.projName.label);
    // tmpArr.push(scr.strcutureType);
    // tmpArr.push(scr.structName.label);
    // tmpArr.push(scr.structName.value);
    dataArr.push(tmpArr);
  }
  return dataArr;
};

export const transformAttri = (data) => {
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
        value: dt.value,
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

export const structureTableMetaData = (handleEdit, handleViewMore) => {
  return [
    {
      text: "Project",
      dataField: "dcNo",
    },
    {
      text: "Struct. Code",
      dataField: "structId",
    },
    {
      text: "Struct. Name",
      selector: "structName",
    },
    {
      text: "Actions",
      center: true,
      formatter: (cell,row) => {
        return (
          <div className="row">
            <div className="col-md-5">
              <IconButton
                // id={row.dispatchId}
                iconname="faEdit"
                onClick={() => handleEdit(true)}
              />
            </div>
            <div className="col-md-5">
              {/* <Button btnText="View More" btnType="btn-primary btn-sm" /> */}
              <IconButton
                id={row.dispatchId}
                iconname="faList"
                onClick={() => handleViewMore(true)}
              />
            </div>
          </div>
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
    },
    {
      text: "Comp Type",
      dataField: "compType",
    },
    {
      text: "Comp ID",
      dataField: "compType",
    },
    {
      text: "Comp No",
      dataField: "compNum",
    },
    {
      text: "Group",
      dataField: "group",
    },

    {
      text: "Dr No",
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
    {
      text: "Cost",
      dataField: "cost",
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
    },

    {
      text: "Structure ID",
      dataField: "structureCode",
      formatter: (cell,row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={() => {
                  handleComponentCheck(row.structureId, row.projectID);
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
      text: "Structure Family",
      dataField: "structureFamily",
    },
    {
      text: "Component Count",
      dataField: "componentsCount",
    },

    {
      text: "Total Weight",
      dataField: "totalWeight",
    },
    {
      text: "Structure Status",
      dataField: "structureStatus",
    },
    {
      text: "Current Status",
      dataField: "currentStatus",
    },
    {
      text: "Actions",
      formatter: (cell,row) => {
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
      text: "Component NO",
      dataField: "componentNo",
    },
    {
      text: "Component",
      dataField: "component",
    },
    {
      text: "Component ID",
      dataField: "componentID",
    },
    {
      text: "Component Family",
      dataField: "componentFamily",
    },
    {
      text: "Drawing Number",
      dataField: "drawingNumber",
    },
    {
      text: "O/M",
      dataField: "oM",
    },
    {
      text: "Mod No",
      dataField: "modNo",
    },
    {
      text: "Actions",
      formatter: (cell,row) => {
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
