import React from "react";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";
export const listBuiltTypeMetaData = (
  redirectToBuiltMoreDetails,
  handleEdit,
  handleMore,
  handleViewMore
) => {
  return [
    {
      text: "DC No",
      dataField: "dispatchNo",
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
              onClick={(e) => {
                e.preventDefault();
                redirectToBuiltMoreDetails(
                  row.projectStructureId,
                  row.dispatchNo,
                  row.structrueName,
                  row.structureCode
                );
              }}
            >
              {row.structureCode}
            </a>
          </>
        );
      },
    },
    {
      text: "Vendor Name",
      dataField: "vendorName",
      style: { verticalAlign: "middle" },
      sortable: true,
    },
    {
      text: "Component Weight",
      dataField: "componentWeight",
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
            <IconButton iconname="faList" onClick={() => handleMore(row.id)} />
            {row.status !== "FABRICATION COMPLETED" && (
              <IconButton
                iconname="faEdit"
                onClick={() => handleViewMore(row.dispReqStructId)}
              />
            )}
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
      text: "Component",
      dataField: "componentName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component Type",
      dataField: "compTypeName",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component ID",
      dataField: "compId",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Component No",
      dataField: "componentNo",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Group",
      dataField: "group",
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => <span>{row.isGroup ? "Yes" : "No"}</span>,
    },

    {
      text: "Drawing No",
      dataField: "drawingNo",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Length",
      dataField: "leng",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Breadth",
      dataField: "breath",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Height",
      dataField: "height",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Thickness",
      dataField: "thickness",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Weight",
      dataField: "weight",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Type",
      dataField: "makeType",
      style: { verticalAlign: "middle" },
    },
    {
      text: "Tag",
      dataField: "tag",
      style: { verticalAlign: "middle" },
      formatter: (cell, row) => <span>{row.isTag ? "Yes" : "No"}</span>,
    },
    {
      text: "QR Code",
      dataField: "qrCode",
      style: { verticalAlign: "middle" },
    },
  ];
};
