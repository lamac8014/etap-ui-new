import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (
  redirectToBuiltMoreDetails,
  handleEdit,
  handleMore
) => {
  return [
    {
      text: "DC No",
      dataField: "dcNo",
      sortable: true,
    },

    {
      text: "Structure Name",
      dataField: "structureName",
      sortable: true,
      formatter: (row) => {
        return (
          <>
            {
              <a
                href="#"
                onClick={() => {
                  redirectToBuiltMoreDetails(row.structureName);
                }}
              >
                {row.structureName}
              </a>
            }
          </>
        );
      },
    },
    {
      text: "Structure Code",
      dataField: "structureCode",
      sortable: true,
    },

    {
      text: "Actions",
      dataField: true,
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                iconname="faPlus"
                onClick={() => handleEdit(row.id)}
              />
            }
            {<IconButton iconname="faEye" onClick={() => handleMore(row.id)} />}
          </>
        );
      },
    },
  ];
};

export const listBuiltDetailsMetaData = () => {
  return [
    {
      text: "Comp",
      dataField: "component",
      sortable: true,
    },
    {
      text: "ID",
      dataField: "id",
      sortable: true,
    },
    {
      text: "DR No",
      dataField: "drNo",
      sortable: true,
    },
    {
      text: "Attr 1",
      dataField: "attributeOne",
      sortable: true,
    },
    {
      text: "Attr 2",
      dataField: "attributeTwo",
      sortable: true,
    },
    {
      text: "Attr 3",
      dataField: "attributeThree",
      sortable: true,
    },
    {
      text: "Vendor",
      dataField: "vendor",
      sortable: true,
    },
    {
      text: "QR",
      dataField: "qrCode",
      sortable: true,
    },
  ];
};
