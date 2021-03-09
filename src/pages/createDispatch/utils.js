import React from "react";
import IconButton from "../../common/forms/IconButton";
import CheckBox from "../../common/forms/Checkbox";

export const createDispatchMetaData = (handleEditIconPress) => {
  return [
    {
      text: "MR Number",
      dataField: "mrNo",
      
    },

    {
      text: "Project",
      dataField: "projectName",
    },
    {
      text: "Project ID",
      dataField: "projectId",
    },
    {
      text: "Status",
      dataField: "status",
    },
    {
      text: "Actions",
      sortable: true,
      formatter: (row) => {
        return (
          <>
            <IconButton
              id={row.id}
              iconname="faEdit"
              onClick={() => handleEditIconPress(row.id)}
            />
          </>
        );
      },
    },
  ];
};
export const twccDispatchMetaData = (
  redirectToDispatchStructure,
  handleMore
) => {
  return [
    {
      text: "MR Number",
      dataField: "mrNo",

    },

    {
      text: "Structure Name",
      dataField: "structureName",


      formatter: (cell, row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={() => {
                  redirectToDispatchStructure(row.projectId);
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
      text: "Req By",
      dataField: "requiredBy",

    },
    {
      text: "Raised By",
      dataField: "raisedBy",

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
            <IconButton
              iconname="faEye"
              onClick={() => handleMore(row.id)}
            />
          </>
        );
      },
    },
  ];
};


export const transformDropDownData = (data, valueKey, labelKey) => {
  let tmpArr = [];
  data &&
    data.map((dt) => {
      tmpArr.push({
        label: dt[labelKey],
        value: dt[valueKey],
      });
    });
  return tmpArr;
};

export const dispatchStructureMetaData = (setSelectedStructures) => {
  return [
    {
      sortable: true,
      cell: row => {
        return (
          <>
            { (
              <CheckBox
                checked={row.checked}
                onChange={() => setSelectedStructures(row)}
                disabled={row.dispStructureStatus === "DISPATCHED" ? true : false}
              />
            )}
          </>
        );
      },
      width: '2%',
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Structure ID",
      selector: "structureCode",
      sortable: true,
    },
    {
      name: "Project",
      selector: "projectName",
      sortable: true,
    },
    {
      name: "Availability",
      sortable: true,
      cell: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      name: "Dispatch Structure Status",
      selector: "dispStructureStatus",
      sortable: true,
    },
    {
      name: "Available Project",
      selector: "availProjectName",
      sortable: true,
    },
  ];
};
export const twccdispatchStructureMetaData = (setSelectedStructures, handleMore) => {
  return [
    {
      sortable: true,
      cell: row => {
        return (
          <>
            { (
              <CheckBox
                checked={row.checked}
                onChange={() => setSelectedStructures(row)}
                disabled={row.availability === "No" ? true : false}
              />
            )}
          </>
        );
      },
      width: '2%',
    },
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Availability",
      selector: "availability",
      sortable: true,
      cell: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      name: "Avail.Site",
      selector: "site",
      sortable: true,
    },
    {
      name: "Avail.Date",
      sortable: true,
      selector: "date",

    },
    {
      name: "Attribute",
      selector: "attr",
      sortable: true,
    },
    {
      name: "Actions",
      sortable: true,
      cell: (row) => {
        return (
          <>
            <IconButton
              iconName="faEye"
              onClick={() => handleMore(row.id)}
            />
          </>
        );
      },
    },

  ];
};

export const lstVerifyStructureQtyMetaData = () => {
  return [
    {
      name: "Structure Name",
      selector: "structureName",
      sortable: true,
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: true,
    },
  ];
};


export const transformdispatchStructure = dispatchStructure => {
  let tmpArr = [];
  let statusValue;
  dispatchStructure &&
    dispatchStructure.map(structure => {

      let tmpObj = {
        structureName: structure.structureName,
        structureCode: structure.structureCode,
        projectName: structure.projectName,
        dispStructureStatus: structure.dispStructureStatus,
        availProjectName: structure.availProjectName,
        checked: structure.checked,
        availProjectId: structure.availProjectId,
        planStartdate: structure.planStartdate
      };
      tmpArr.push(tmpObj);
    });
  return tmpArr;
};