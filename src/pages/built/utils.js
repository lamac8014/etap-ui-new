import React from "react";
import IconButton from "../../common/forms/IconButton";

export const listBuiltTypeMetaData = (
  redirectToBuiltMoreDetails,
  handleEdit,
  handleMore,
  handleViewMore,
) => {
  return [
    {
      text: "DC No",
      dataField: "dcNo",
      style: { verticalAlign: "middle" },
    },

    {
      text: "Structure Name",
      dataField: "structrueName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Structure Code",
      dataField: "strcutureCode",
      style: { verticalAlign: "middle" },
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
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Actions",
      dataField: true,
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => {
        return (
          <>

            <IconButton
              iconname="faList"
              onClick={() => handleMore(row.id)}
            />
            <IconButton
              iconname="faEye"
              onClick={() => handleEdit(row.id)}
            />

          </>
        );
      },
    },
  ];
};
// export const getTableData = (built) => {
// 	let tmpArr = [];
// 	let data = built.getData;
// 	data &&
// 		data.map((data) => {
// 			tmpArr.push({
// 				dcNo: data.dcNo,
// 				structureName: data.structureName,
// 				structureCode: data.structureCode,
// 				weight: data.weight,
// 			});
// 		});
// 	return tmpArr;
// };
export const listBuiltDetailsMetaData = () => {
  return [
    {
      text: "Comp",
      dataField: "component",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "ID",
      dataField: "id",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "DR No",
      dataField: "drNo",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Attr 1",
      dataField: "attributeOne",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Attr 2",
      dataField: "attributeTwo",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Attr 3",
      dataField: "attributeThree",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Vendor",
      dataField: "vendor",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "QR",
      dataField: "qrCode",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
  ];
};
