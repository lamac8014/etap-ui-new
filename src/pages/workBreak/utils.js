import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listWBSMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "WBS",
      dataField: "wbs",
    },
    {
      text: "Segment",
      dataField: "segment",
    },
    {
      text: "SubSegment",
      dataField: "subSegment",
    },
    {
      text: "Element",
      dataField: "element",
    },
  ];
};

export const transformWBSData = (wbsArray) => {
  let tmpArr = [];
  let statusValue;
  wbsArray &&
    wbsArray.map((component) => {
      let tmpObj = {
        wbs: component.workBreakDownCode,
        segment: component.segment,
        subSegment: component.subSegment,
        element: component.element,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const listWBSMetaDataView = (handleDelete, handleEdit) => {
  return [
    {
      name: "ProjectCode",
      selector: "projectCode",
      sortable: true,
    },
    {
      name: "WBS",
      selector: "wbs",
      sortable: true,
    },
    {
      name: "Segment",
      selector: "segment",
      sortable: true,
    },
    {
      name: "SubSegment",
      selector: "subSegment",
      sortable: true,
    },
    {
      name: "Element",
      selector: "element",
      sortable: true,
    },
  ];
};

export const transformWBSListView = (wbsArray) => {
  let tmpArr = [];
  let statusValue;
  wbsArray &&
    wbsArray.map((component) => {
      let tmpObj = {
        projectCode: component.projectCode,
        wbs: component.workBreakDownCode,
        segment: component.segment,
        subSegment: component.subSegment,
        element: component.element,
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};

export const CSVLoaderStyles = {
  dropArea: {
    borderColor: "#6c6e75",
    borderRadius: 15,
    backgroundColor: "#f3f3f3",
    height: 100,
  },
  dropFile: {
    width: 100,
    height: 120,
    background: "#ccc",
  },
};

export const getDownloadWbsTemplateData = () => {
  return [["WBS", "Segment", "Subsegment", "Element"], []];
};
