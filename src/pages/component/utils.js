import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listComponentTypeMetaData = (handleDelete, handleEdit) => {
  return [
    // {
    //   sortable: true,
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
      text: "Component Type",
      dataField: "componentType",
    },
    {
      text: "Status",
      dataField: "status",
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

export const transformComponentList = (componentList) => {
  let tmpArr = [];
  let statusValue;
  componentList &&
    componentList.map((component) => {
      if (component.isActive) {
        statusValue = "Active";
      } else {
        statusValue = "InActive";
      }
      let tmpObj = {
        id: component.id,
        componentType: component.name,
        status: statusValue,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

// export const _viewComponentData = ["IC", "BU", "Project", "Structure Family", "Structure", "Structure ID", "Component Type", "Component", "Component ID", "Group", "Component No", "Drawing No", "Length", "Breadth", "Height", "Thickness", "Weight", "Original/Modified", "Modification No", "Manufactured/Fabricated", "Tag", "QR Code", "Vendor/Site Name", "Fabrication Cost", "Component Status", "Current Status"];
// export const _viewComponentBodyData = [
//     {
//         ic: "",
//         bu: "",
//         project: "",
//         structureFamily: "",
//         structure: "",
//         structureId: "",
//         componentType: "",
//         component: "",
//         componentId: "",
//         group: "",
//         componentNo: "",
//         drawingNo: "",
//         length: "",
//         breadth: "",
//         height: "",
//         thickness: "",
//         weight: "",
//         original: "",
//         modificationNo: "",
//         fabrication: "",
//         tag: "",
//         qrCode: "",
//         vendor: "",
//         fabricationCost: "",
//         componentStatus: "",
//         currentStatus: "",
//     },

// ];

// export const _viewComponentModificationHistoryData = [ "Structure ID", "Component Type", "Component", "Component ID", "Group", "Component No", "Drawing No", "Length", "Breadth", "Height", "Thickness", "Weight", "Original/Modified", "Modification No", "Manufactured/Fabricated", "Tag No", "QR Code"];
// export const _viewComponentModificationHistoryBodyData = [
//     {

//         structureId: "",
//         componentType: "",
//         component: "",
//         componentId: "",
//         group: "",
//         componentNo: "",
//         drawingNo: "",
//         length: "",
//         breadth: "",
//         height: "",
//         thickness: "",
//         weight: "",
//         original: "",
//         modificationNo: "",
//         fabrication: "",
//         tag: "",
//         qrCode: "",

//     },

// ];
