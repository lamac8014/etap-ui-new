import React from "react";
import IconButton from "../../common/forms/IconButton";

export const businessUnitMetaData = (handleDelete, handleEdit) => {
  return [
    // {
    //   sortable: true,
    //   cell: row => {
    //     return (
    //       <>
    //         { (
    //           <IconButton
    //             iconName="faTimes"
    //             className={'table-delete-icon'}
    //             onClick={() => handleDelete(row.id)}
    //           />
    //         )}
    //       </>
    //     );
    //   },
    //   width: '2%',
    // },
    {
      text: "BU Name",
      dataField: "businessUnit",
      style: { verticalAlign: "middle" },
    },
    {
      text: "IC Name",
      dataField: "icName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "SBG Name",
      dataField: "sbgName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Status",
      dataField: "status",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Actions",
      style: { verticalAlign: "middle" },
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

export const businessUnitBodyData = (businessUnitList) => {
  let tmpArr = [];
  let status;
  businessUnitList &&
    businessUnitList.map((businessUnit, i) => {
      if (businessUnit.isActive) {
        status = "Active";
      } else {
        status = "InActive";
      }
      let tmpObj = {
        id: i,
        businessUnit: businessUnit.name,
        icName: businessUnit.icName,
        status: status,
        sbgName: businessUnit.sbgName,
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
