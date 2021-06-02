import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listProjectMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "Project",
      dataField: "name",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Project Code",
      dataField: "projCode",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Area",
      dataField: "area",
      style: { verticalAlign:"middle"},
    },
    {
      text: "IC",
      dataField: "icName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "BU",
      dataField: "buName",
      style: { verticalAlign:"middle"},
    },
    {
      text: "Actions",
      formatter: (cell, row) => {
        return (
          <IconButton iconname="faEdit" onClick={() => handleEdit(row.id)} />
        );
      },
    },
  ];
};

export const transformProjectList = (projectList) => {
  let tmpArr = [];
  projectList &&
    projectList.map((project) => {
      let tmpObj = {
        id: project.id,
        name: project.name,
        projCode: project.projCode,
        area: project.area,
        icName: project.icName,
        buName: project.buName,
        segmentId: project.segmentId,
        projectSites: project.projectSiteLocationDetails
          .map((dt) => dt.name)
          .join()
          .replaceAll(",", ", "),
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};
