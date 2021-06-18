import React from "react";
import Checkbox from "../../common/forms/Checkbox";
import IconButton from "../../common/forms/IconButton";
import { Input } from "reactstrap";

export const listUsersMetaData = (setSelectedStructures, handleViewMore) => {
	return [
		{
			text: "",
			dataField: "",
			//style: {verticalAlign:"middle"},
			formatter: (cell, row) => {
				return (
					<Input
						key={row.dispatchRequirementId}
						type="checkbox"
						style={{ marginTop:10,marginBottom:5,marginLeft:0}}
						//  disabled={row.disabled}
						checked={row.checked}
						onChange={() => setSelectedStructures(row)}
					/>
				);
			},
		},
		{
			text: "DA No",
			dataField: "dcNumber",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Struct. Name",
			dataField: "structrueName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Struct. Code",
			dataField: "structureCode",
			style: {verticalAlign:"middle"},
		},
		{
			text: "No of Components",
			dataField: "numberOfComponents",
			style: {verticalAlign:"middle"},
						formatter: (cell, row) => {
				return (
					<p>
						{row.currentComponentsCount}/{row.requiredComponenentCount}
					</p>
				);
			},
		},
		{
			text: "Required By",
			dataField: "projectName",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Quantity",
			dataField: "quantity",
			style: {verticalAlign:"middle"},
		},
		{
			text: "Actions",
			style: {verticalAlign:"middle"},
			formatter: (cell, row) => {
				return (
					<div key={row.userId}>
						<>
							<IconButton
								compKey={row.userId}
								iconname="faList"
								size="1x"
								onClick={() => handleViewMore(row)}
							/>
						</>
					</div>
				);
			},
		},
	];
};

export const addIdToData = (data) => {
	let tmpArr = [];
	data &&
		data.map((item, index) => {
			let tmpObj = {
				id: item[index],
				checked: false,
				...item,
			};
			tmpArr.push(tmpObj);
		});
	return tmpArr;
};
