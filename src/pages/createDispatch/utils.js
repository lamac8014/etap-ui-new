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
      formatter: row => {
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
      text: "Structure Name",
      dataField: "structureName",
      sortable: true,
    },
    {
      text: "Structure ID",
      dataField: "structureCode",
      sortable: true,
    },
    {
      text: "Project",
      dataField: "projectName",
      sortable: true,
    },
    {
      text: "Availability",
      dataField: true,
      formatter: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      text: "Dispatch Structure Status",
      dataField: "dispStructureStatus",
      sortable: true,
    },
    {
      text: "Available Project",
      dataField: "availProjectName",
      sortable: true,
    },
  ];
};
export const twccdispatchStructureMetaData = (setSelectedStructures, handleMore) => {
  return [
    {
      sortable: true,
      formatter: row => {
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
      text: "Structure Name",
      dataField: "structureName",
      sortable: true,
    },
    {
      text: "Availability",
      dataField: "availability",
      sortable: true,
      formatter: (row) => {
        return row.availProjectId === null ? "NO" : "YES";
      },
    },
    {
      text: "Avail.Site",
      dataField: "site",
      sortable: true,
    },
    {
      text: "Avail.Date",
      dataField: true,
      selector: "date",

    },
    {
      text: "Attribute",
      dataField: "attr",
      sortable: true,
    },
    {
      text: "Actions",
      dataField: true,
      formatter: (row) => {
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

export const lstVerifyStructureQtyMetaData = () => {
  return [
    {
      text: "Structure Name",
      dataField: "structureName",
      sortable: true,
    },
    {
      text: "Quantity",
      dataField: "quantity",
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