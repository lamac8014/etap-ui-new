import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listProjectMetaData = (handleDelete, handleEdit) => {
  return [
    {
      text: "Project",
      dataField: "name",
    },
    {
      text: "Project Code",
      dataField: "projCode",
    },
    {
      text: "Area",
      dataField: "area",
    },
    {
      text: "IC",
      dataField: "icName",
    },
    {
      text: "BU",
      dataField: "buName",
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
