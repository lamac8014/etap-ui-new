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
		},
		{
			text: "Structure Name",
			dataField: "structureName",
		},
		{
			text: "Structure Code",
			dataField: "structId",
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
		},
		{
			text: "Actions",
			center: true,

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
		},
		{
			text: "Component Type",
			dataField: "componentType",
		},
		{
			text: "Comp. ID",
			dataField: "componentId",
		},
		{
			text: "Dr. No",
			dataField: "drawingNumber",
		},
	];
};
