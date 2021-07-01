import React from "react";
import IconButton from "../../common/forms/IconButton";
import Button from "../../common/forms/Button";
import { Input } from "reactstrap";

export const siteDispatchMetaDatatext = (
	handleViewMore,
	redirectToComponentPage
) => {
	return [
		{
			text: "DC No",
			dataField: "dcNumber",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Structure Name",
			dataField: "structureName",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Structure Code",
			dataField: "structId",
			style: { verticalAlign:"middle"},
			formatter: (cell, row) => {
				return (
					<a
						href="#"
						onClick={() => {
							redirectToComponentPage(
								row.dispStructureId,
								row.dispSubContractorId,
								row.componentCount,
								row.structureName,
								row.structureCode
							);
						}}
					>
						{row.structureCode}
					</a>
				);
			},
		},

		{
			text: "Qty Assigned",
			dataField: "quantity",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Actions",
			center: true,
			style: { verticalAlign:"middle"},

			formatter: (cell, row) => {
				return (
					<IconButton
						id={row.dispatchId}
						iconname="faList"
						onClick={() => {
							handleViewMore(row.dispSubContractorId);
						}}
					/>
				);
			},
		},
	];
};
export const sortData = (getSiteDispatchDetails) => {
	let tmpArr = [];
	getSiteDispatchDetails &&
	   getSiteDispatchDetails.map((siteDispatch) => {
		let tmpObj = {
			createdAt:siteDispatch.creatDate ? siteDispatch.creatDate:null,
			updatedAt:siteDispatch.updatedDate ? siteDispatch.updatedDate:null
		}
		tmpArr.push(tmpObj);
	});
	return tmpArr;
};
export const componentMetaData = (setSelectedComponents) => {
	return [
		{
			formatter: (cell, row) => {
				return (
					<>
						<Input
							type="checkbox"
							style={{ marginLeft: 0 }}
							disabled={row.disabled}
							checked={row.checked}
							onChange={() => {
								setSelectedComponents(row);
							}}
						/>
					</>
				);
			},
			width: "2%",
		},
		{
			text: "Component",
			dataField: "componentName",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Component Type",
			dataField: "componentType",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Comp. ID",
			dataField: "componentId",
			style: { verticalAlign:"middle"},
		},
		{
			text: "Dr. No",
			dataField: "drawingNumber",
			style: { verticalAlign:"middle"},
		},
	];
};
