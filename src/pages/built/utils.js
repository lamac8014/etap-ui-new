import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (
  redirectToBuiltMoreDetails,
  handleEdit,
  handleMore
) => {
  return [
    {
      text: "DA No",
      dataField: "dcNo",
    },

    {
      text: "Structure Name",
      dataField: "structureName",
    },
    {
      text: "Structure Code",
      formatter: (cell, row) => {
        return (
          <>
            <a
              href="#"
              onClick={() => {
                redirectToBuiltMoreDetails(row.structureName);
              }}
            >
              {row.structureCode}
            </a>
          </>
        );
      },
    },
    {
      text: "Component Weight",
      dataField: "weight",
    },
    {
      text: "Actions",
      dataField: true,
      formatter: (cell, row) => {
        return (
          <>
            {
              <IconButton
                iconname="faList"
                onClick={() => handleMore(row.id)}
              />
            }
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
