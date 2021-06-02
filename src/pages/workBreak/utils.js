import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listWBSMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "WBS",
      dataField: "wbs",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Segment",
      dataField: "segment",
      style: { verticalAlign:"middle"},
    },
    {
      text: "SubSegment",
      dataField: "subSegment",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Element",
      dataField: "element",
      style: { verticalAlign:"middle"},
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
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      name: "WBS",
      selector: "wbs",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      name: "Segment",
      selector: "segment",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      name: "SubSegment",
      selector: "subSegment",
      style: { verticalAlign:"middle"},
      sortable: true,
    },
    {
      name: "Element",
      selector: "element",
      style: { verticalAlign:"middle"},
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
